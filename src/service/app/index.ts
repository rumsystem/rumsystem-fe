import { observable, runInAction } from 'mobx';
import { load } from 'js-yaml';
import { cachePromiseHof } from '~/utils';

const state = observable({
  rumAppVersionRaw: '',
  rumAndroidVersion: '',
  rumAndroidLink: '',

  get rumAppLoading() {
    return !this.rumAppVersionRaw;
  },
  get rumAndroidLoading() {
    return !this.rumAndroidVersion;
  },
  get rumAppVersion() {
    return `v${this.rumAppVersionRaw}`;
  },
  get rumAppWinLink() {
    return `https://static-assets.xue.cn/rum-testing/RUM-${this.rumAppVersionRaw}.exe`;
  },
  get rumAppLinuxLink() {
    return `https://static-assets.xue.cn/rum-testing/RUM-${this.rumAppVersionRaw}.linux.zip`;
  },
  get rumAppMacLink() {
    return `https://static-assets.xue.cn/rum-testing/RUM-${this.rumAppVersionRaw}.dmg`;
  },
});

export interface RumAppMetadata {
  version: string
  files: {
    url: string
    sha512: string
    size: number
  }
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


const getRumAppVersion = cachePromiseHof(async () => {
  if (state.rumAppVersionRaw) { return; }
  try {
    const fetchResponse = await fetch('https://static-assets.pek3b.qingstor.com/rum-testing/latest.yml');
    const metaText = await fetchResponse.text();
    const data = load(metaText) as RumAppMetadata;
    runInAction(() => {
      state.rumAppVersionRaw = data.version;
    });
  } catch {}
});

const getRumAndroidVersion = cachePromiseHof(async () => {
  if (state.rumAndroidVersion) { return; }
  try {
    const fetchResponse = await fetch('https://xue.cn/hub/api/app_managements?platform=android&channel=rum');
    const data: RumAndroidMetadata = await fetchResponse.json();
    runInAction(() => {
      state.rumAndroidLink = data.file;
      state.rumAndroidVersion = `v${data.version_name}`;
    });
  } catch {}
});

const getVersion = cachePromiseHof(async () => {
  await Promise.all([
    getRumAppVersion(),
    getRumAndroidVersion(),
  ]);
});


export const appService = {
  state,
  getRumAppVersion,
  getRumAndroidVersion,
  getVersion,
};
