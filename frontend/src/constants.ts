export const HOMEBREW_REFRESH_INTERVAL = 1000 * 60 * 60;
export const MIN_SEARCH_LENGTH         = 2;
export const API_ENDPOINT              = 'https://europe-west2-brewmymac.cloudfunctions.net/brewmymac-backend';

export const API_MAX_RETRIES  = 3;
export const SEARCH_FUZZINESS = 0.2;

export const ESSENTIAL_APPS = [
    'Homebrew (Cask)/google-chrome',
    'Homebrew (Cask)/firefox',
    'Homebrew (Cask)/spotify',
    'Homebrew (Cask)/zoom',
    'Homebrew (Cask)/microsoft-office',
    'Homebrew (Cask)/adobe-acrobat-reader',
];

export const DEVELOPMENT_APPS = [
    'Homebrew (Cask)/visual-studio-code',
    'Homebrew (Cask)/intellij-idea',
    'Homebrew (Cask)/webstorm',
    'Homebrew/node',
    'Homebrew (Cask)/temurin',
    'Homebrew/openjdk',
    'Homebrew (Cask)/graalvm-jdk',
    'Homebrew (Cask)/sourcetree',
    'Homebrew/docker',
    'Homebrew/terraform',
    'Homebrew/ansible',
];

export const UTILITY_APPS = [
    'Homebrew (Cask)/bitwarden',
    'Homebrew (Cask)/bartender',
    'Homebrew (Cask)/istat-menus',
    'Homebrew (Cask)/cleanmymac',
    'Homebrew (Cask)/app-tamer',
    'Homebrew (Cask)/lulu',
];
