import { observable, runInAction } from 'mobx';
import { load } from 'js-yaml';
import { cachePromiseHof, RUM_APP_BASE, runLoading } from '~/utils';

export interface RumAppMetadata {
  version: string
  files: Array<{
    url: string
    sha512: string
    size: number
  }>
  path: string
  sha512: string
  releaseNotes: string
  releaseDate: string
}

export interface RumAndroidMetadata {
  changelog: string
  changelog_en: null
  channel: string
  created_at: string
  file: string
  force_upgrade: boolean
  id: number
  platform: string
  updated_at: string
  url: string
  version_code: number
  version_name: string
}

export interface GithubRelease {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: GithubReleaseAuthor
  node_id: string
  tag_name: string
  target_commitish: string
  name: string
  draft: boolean
  prerelease: boolean
  created_at: string
  published_at: string
  assets: Array<{
    url: string
    id: number
    node_id: string
    name: string
    label: string
    uploader: GithubReleaseAuthor
    content_type: string
    state: string
    size: number
    download_count: number
    created_at: string
    updated_at: string
    browser_download_url: string
  }>
  tarball_url: string
  zipball_url: string
  body: string
}

export interface GithubReleaseAuthor {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

const state = observable({
  loading: false,
  metadata: {
    windows: null as null | RumAppMetadata,
    linux: null as null | RumAppMetadata,
    macos: null as null | RumAppMetadata,
    rumLib: null as null | GithubRelease,
    rumFeedAndroid: {} as any,
  },
  get links() {
    const macosFile = this.metadata.macos?.files.find((v) => v.url.endsWith('.dmg'));
    return {
      windows: this.metadata.windows?.path
        ? `${RUM_APP_BASE}${this.metadata.windows?.path}`
        : '',
      linux: this.metadata.linux?.path
        ? `${RUM_APP_BASE}${this.metadata.linux?.path}`
        : '',
      macos: macosFile
        ? `${RUM_APP_BASE}${macosFile.url}`
        : '',
      rumLibWindows: this.metadata.rumLib?.assets.find((asset) => asset.name.includes('exe'))?.browser_download_url,
      rumLibMac: this.metadata.rumLib?.assets.find((asset) => asset.name.includes('dmg'))?.browser_download_url,
      rumLibLinux: this.metadata.rumLib?.assets.find((asset) => asset.name.includes('linux'))?.browser_download_url,
      rumFeedAndroid: this.metadata.rumFeedAndroid.url,
    };
  },
  get versions() {
    return {
      windows: this.metadata.windows?.version ?? '',
      linux: this.metadata.linux?.version ?? '',
      macos: this.metadata.macos?.version ?? '',
      rumLib: this.metadata.rumLib?.tag_name?.slice(1) ?? '',
      rumFeedAndroid: this.metadata.rumFeedAndroid.version || '',
    };
  },
});

const fetchYml = async <T>(url: string) => {
  for (let i = 0; i < 3; i += 1) {
    const fetchResponse = await fetch(url);
    const metaText = await fetchResponse.text();
    const data = load(metaText) as T;
    return data;
  }
  return null;
};

const rumAppAssetsBase = 'https://storage.googleapis.com/static.press.one/rum-app';

const loadWindows = cachePromiseHof(async () => {
  if (state.metadata.windows) { return; }
  const data = await fetchYml<RumAppMetadata>(`${rumAppAssetsBase}/latest.yml?t=${Date.now()}`);
  runInAction(() => {
    if (data) { state.metadata.windows = data; }
  });
});
const loadLinux = cachePromiseHof(async () => {
  if (state.metadata.linux) { return; }
  const data = await fetchYml<RumAppMetadata>(`${rumAppAssetsBase}/latest-linux.yml?t=${Date.now()}`);
  runInAction(() => {
    if (data) { state.metadata.linux = data; }
  });
});
const loadMacOS = cachePromiseHof(async () => {
  if (state.metadata.macos) { return; }
  const data = await fetchYml<RumAppMetadata>(`${rumAppAssetsBase}/latest-mac.yml?t=${Date.now()}`);
  runInAction(() => {
    if (data) { state.metadata.macos = data; }
  });
});
const loadRumLib = cachePromiseHof(async () => {
  if (state.metadata.rumLib) { return; }
  const data: GithubRelease = await (await fetch('https://api.github.com/repos/rumsystem/rum-epub/releases/latest')).json();
  runInAction(() => {
    if (data) { state.metadata.rumLib = data; }
  });
});
const loadRumFeedApp = cachePromiseHof(async () => {
  if (state.metadata.macos) { return; }
  const data = await (await fetch('https://storage.googleapis.com/static.press.one/feed/app/latest.json')).json();
  runInAction(() => {
    if (data) { state.metadata.rumFeedAndroid = data.android || {}; }
  });
});

const loadData = () => {
  if (state.loading) { return; }
  runLoading(
    (l) => { state.loading = l; },
    async () => {
      await Promise.all([
        loadWindows(),
        loadLinux(),
        loadMacOS(),
        loadRumLib(),
        loadRumFeedApp(),
      ]);
    },
  );
};

export const appService = {
  state,
  loadData,
};
