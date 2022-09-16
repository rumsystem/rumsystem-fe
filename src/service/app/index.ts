import { observable, runInAction } from 'mobx';
import { load } from 'js-yaml';
import { cachePromiseHof } from '~/utils';

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

const state = observable({
  metadata: {
    windows: null as null | RumAppMetadata,
    linux: null as null | RumAppMetadata,
    macos: null as null | RumAppMetadata,
    android: null as null | RumAndroidMetadata,
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

const loadWindows = cachePromiseHof(async () => {
  if (state.metadata.windows) { return; }
  const data = await fetchYml<RumAppMetadata>(`https://static-assets.pek3b.qingstor.com/rum-testing/latest.yml?t=${Date.now()}`);
  runInAction(() => {
    if (data) { state.metadata.windows = data; }
  });
});
const loadLinux = cachePromiseHof(async () => {
  if (state.metadata.linux) { return; }
  const data = await fetchYml<RumAppMetadata>(`https://static-assets.pek3b.qingstor.com/rum-testing/latest-linux.yml?t=${Date.now()}`);
  runInAction(() => {
    if (data) { state.metadata.linux = data; }
  });
});
const loadMacOS = cachePromiseHof(async () => {
  if (state.metadata.macos) { return; }
  const data = await fetchYml<RumAppMetadata>(`https://static-assets.pek3b.qingstor.com/rum-testing/latest-mac.yml?t=${Date.now()}`);
  runInAction(() => {
    if (data) { state.metadata.macos = data; }
  });
});
const loadAndroid = cachePromiseHof(async () => {
  if (state.metadata.android) { return; }
  const data = await fetchYml<RumAndroidMetadata>('https://xue.cn/hub/api/app_managements?platform=android&channel=rum');
  runInAction(() => {
    if (data) { state.metadata.android = data; }
  });
});

const loadData = async () => {
  await Promise.all([
    loadWindows(),
    loadLinux(),
    loadMacOS(),
    loadAndroid(),
  ]);
};

export const appService = {
  state,
  loadData,
};
