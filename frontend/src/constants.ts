export const HOMEBREW_REFRESH_INTERVAL : number = 1000 * 60 * 60 * 24 * 7;
export const TWEAKS_REFRESH_INTERVAL : number   = 1000 * 60 * 60 * 24 * 7;
export const PAGES_REFRESH_INTERVAL : number    = 1000 * 60 * 60 * 24 * 7;
export const MIN_SEARCH_LENGTH : number         = 2;
export const API_ENDPOINT : string              = 'https://europe-west2-brewmymac.cloudfunctions.net/api';

export const API_MAX_RETRIES : number  = 3;
export const SEARCH_FUZZINESS : number = 0.2;

export const RECIPE_COMMANDS : (number | string)[] = [
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/recipes/install/GXcE_gYLmnKDJbHpfxEZx')"`,
    2000,
    '$ ',
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/recipes/install/A2aLCDKKkC_7qnaciCzKJ')"`,
    2000,
    '$ ',
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/recipes/install/aZLCiXg8e8WkfBjrqdTyC')"`,
    2000,
    '$ ',
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/recipes/install/gMHAV-ww_jazkwgyptqZY')"`,
    2000,
    '$ ',
    750,
];

export const SPELLBOOK_COMMANDS : (number | string)[] = [
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/spellbooks/install/Qi-xGQ8CFa4VpABxk-44y')"`,
    2000,
    '$ ',
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/spellbooks/install/78R-pM-Z2B_CgfPabth2J')"`,
    2000,
    '$ ',
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/spellbooks/install/WZpJ9q7rhKZHhNWBHXXgL')"`,
    2000,
    '$ ',
    750,
    `$ /bin/bash -c "$(curl -fsSL '${API_ENDPOINT}/spellbooks/install/BC4Na_CKRE2x3iEpKqhmq')"`,
    2000,
    '$ ',
    750,
];

export const INGREDIENT_CATEGORIES = [
    'Essentials',
    'Development',
    'Utilities',
];

export const TWEAK_CATEGORIES = [
    'Appearance',
    'Finder',
    'File management',
    'Multimedia',
    'Preferences',
    'Keyboard',
    'Security',
    'Operating System',
];

export const PAGE_PATHS : Record<string, string> = {
    'about'      : '2Kz5ZxqBxTm6O9Jy5f0t1y',
    'terms'      : '7rGcIumbIVDuu0KZqVauvH',
    'privacy'    : 'kirxbfcCbtRcCaGlxLZFE',
    'disclaimer' : '5JIZ4p8HrhBkuF5NI5F0dH',
};
