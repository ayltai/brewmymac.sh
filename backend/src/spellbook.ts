import { Spell, } from './models';

export const spellbook : Spell[] = [
    {
        id          : 'launchpad.grid',
        name        : 'Change Launchpad grid layout',
        description : 'Change the number of columns and rows in the Launchpad grid layout. Default is 7x5.',
        category    : 'Preferences',
        infoUrl     : 'https://www.defaults-write.com/change-the-layout-rows-and-columns-of-launchpad/',
        author      : 'BrewMyMac',
        parameters  : [
            'Launchpad grid columns',
            'Launchpad grid rows',
        ],
        types       : [
            'number',
            'number',
        ],
        values      : [
            7,
            5,
        ],
        impact      : 'Dock',
    },
    {
        id          : 'security.disk_image_verification',
        name        : 'Disable disk image verification',
        description : 'You can skip disk image file checksum verification to speed up the mounting of disk images through this is not recommended by Apple or security experts.',
        category    : 'Security',
        infoUrl     : 'https://pamirwebhost.com/mac-os-x-how-to-disable-the-disk-image-verification/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable disk image verification',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'security.gatekeeper',
        name        : 'Disable Gatekeeper',
        description : 'Gatekeeper requires applications to be signed by an Apple developer to run. However, code signing is a paid process and not all developers sign their applications. It gets annoying when it won\'t let you open an application that you know is safe.',
        category    : 'Security',
        infoUrl     : 'https://www.makeuseof.com/how-to-disable-gatekeeper-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable Gatekeeper',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        privileged  : true,
    },
    {
        id          : 'security.quarantine',
        name        : 'Turn off quarantine of unknown applications',
        description : 'When you download an application from the Internet, macOS will mark it as quarantined. This is to prevent you from running malicious applications. However, it gets annoying when it won\'t let you open an application when you is safe.',
        category    : 'Security',
        infoUrl     : 'https://www.idownloadblog.com/2017/04/20/fix-application-from-internet-gatekeeper/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable quarantine',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'bloatware.game_center',
        name        : 'Disable Game Center daemon',
        description : 'Game Center daemon continues to run even when you have disabled Game Center.',
        category    : 'Preferences',
        infoUrl     : 'https://www.furlo.sk/blog/odborny/2017-12-24-disable_game_center_daemon_on_os_x',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable Game Center daemon',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'keyboard.smart_quotes',
        name        : 'Disable smart quotes',
        description : 'macOS automatically converts straight quotes to smart quotes. But for developers, it is annoying to have to manually change them back.',
        category    : 'Keyboard',
        infoUrl     : 'https://apple.stackexchange.com/questions/136402/how-to-disable-smart-quotes',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable smart quotes',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'keyboard.smart_dashes',
        name        : 'Disable smart dashes',
        description : 'macOS automatically converts straight dashes to smart dashes. But for developers, it is annoying to have to manually change them back.',
        category    : 'Keyboard',
        infoUrl     : 'https://apple.stackexchange.com/questions/136402/how-to-disable-smart-quotes',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable smart dashes',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'keyboard.auto_capitalisation',
        name        : 'Disable auto capitalisation',
        description : 'macOS automatically capitalises the first letter of a sentence. But for developers, it is annoying to have to manually change it back.',
        category    : 'Keyboard',
        infoUrl     : 'https://osxdaily.com/2021/02/19/how-turn-off-auto-capitalize-words-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable auto capitalisation',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'keyboard.spelling_autocorrect',
        name        : 'Disable spelling autocorrect',
        description : 'By default, macOS automatically corrects your spelling mistakes',
        category    : 'Keyboard',
        infoUrl     : 'https://www.businessinsider.com/guides/tech/how-to-turn-off-autocorrect-on-mac?r=US&IR=T',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable spelling autocorrect',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'os.sudden_motion_sensor',
        name        : 'Disable the Sudden Motion Sensor',
        description : 'The Sudden Motion Sensor is a hardware feature that detects sudden movement and can be used to protect the hard drive. However, it can also cause problems when you are using a laptop on an uneven surface and it is unnecessary if your Mac ships with an SSD drive.',
        category    : 'Operating System',
        infoUrl     : 'https://osxdaily.com/2010/12/16/disable-sudden-motion-sensor-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable the Sudden Motion Sensor',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        privileged  : true,
    },
    {
        id          : 'os.hibernation',
        name        : 'Disable hibernation',
        description : 'macOS copies the current RAM contents to a file on the disk drive and then shuts down. This is useful if you want to resume your work after a power outage. However, it can cause problems to some applications and it shortens the lifespan of your SSD drive.',
        category    : 'Operating System',
        infoUrl     : 'https://setapp.com/how-to/how-to-stop-mac-from-sleeping',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable hibernation',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        privileged  : true,
    },
    {
        id          : 'media.auto_open_photos',
        name        : 'Disable auto-open Photos',
        description : 'macOS automatically opens Photos every time you insert a memory card or connect a device.',
        category    : 'Multimedia',
        infoUrl     : 'https://www.idownloadblog.com/2015/12/28/how-to-stop-photos-mac-auto-launch/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable auto-open Photos',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'media.default_screenshot_location',
        name        : 'Change default screenshot location',
        description : 'Change the default location where screenshots are saved. Default is ~/Desktop',
        category    : 'Multimedia',
        infoUrl     : 'https://www.macworld.com/article/673251/how-to-change-where-screenshots-are-saved-on-a-mac.html',
        author      : 'BrewMyMac',
        parameters  : [
            'Screenshot file location',
        ],
        types       : [
            'string',
        ],
        values      : [
            '~/Desktop',
        ],
    },
    {
        id          : 'media.display_thumbnail_after_screenshot',
        name        : 'Display thumbnail after screenshot',
        description : 'Display a thumbnail after taking a screenshot.',
        category    : 'Multimedia',
        infoUrl     : 'https://www.makeuseof.com/how-to-disable-screenshot-previews-on-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Enable thumbnail after screenshot',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'media.screenshots_format',
        name        : 'Change screenshots format',
        description : 'Change the format of screenshots. Default is PNG. Support formats are JPG, TIFF, GIF, PDF, and PNG.',
        category    : 'Multimedia',
        infoUrl     : 'https://www.laptopmag.com/articles/change-default-screenshot-file-format-macos',
        author      : 'BrewMyMac',
        parameters  : [
            'Screenshot format',
        ],
        types       : [
            'string',
        ],
        values      : [
            'png',
        ],
        impact      : 'SystemUIServer',
    },
    {
        id          : 'media.screenshot_shadow',
        name        : 'Disable screenshot shadow',
        description : 'By default, macOS adds a shadow to the screenshot.',
        category    : 'Multimedia',
        infoUrl     : 'https://www.idownloadblog.com/2014/08/03/how-to-remove-the-shadow-window-screenshots-on-mac-os-x/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable screenshot shadow',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'SystemUIServer',
    },
    {
        id          : 'media.screenshot_date',
        name        : 'Include a date in screenshot filenames',
        description : 'By default, macOS save screenshots with the filename "Screen Shot YYYY-MM-DD at HH-MM-SS AM/PM.png".',
        category    : 'Multimedia',
        infoUrl     : 'https://macos-defaults.com/screenshots/include-date.html',
        author      : 'BrewMyMac',
        parameters  : [
            'Include date',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'SystemUIServer',
    },
    {
        id          : 'media.subpixel_font_rendering',
        name        : 'Change subpixel font rendering on external monitors',
        description : 'If you are running macOS on a Mac without a retina display, or with an external monitor that does not have an ultra-high resolution screen, you may have noticed that some fonts and text can appear as blurry and difficult to read. This is because macOS is rendering the text using subpixel font rendering. Specify "1" if you want less text smoothing, "2" if you want medium-level text smoothing, and "3" if you want more text smoothing.',
        category    : 'Multimedia',
        infoUrl     : 'https://www.howtogeek.com/358596/how-to-fix-blurry-fonts-on-macos-mojave-with-subpixel-antialiasing/',
        author      : 'BrewMyMac',
        parameters  : [
            'Subpixel rendering mode',
        ],
        types       : [
            'number',
        ],
        values      : [
            2,
        ],
    },
    {
        id          : 'finder.file_extensions',
        name        : 'Show file extensions in Finder',
        description : 'By default, macOS hides file extensions in Finder',
        category    : 'Finder',
        infoUrl     : 'https://macos-defaults.com/finder/appleshowallextensions.html',
        author      : 'BrewMyMac',
        parameters  : [
            'Show file extensions',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Finder',
    },
    {
        id          : 'finder.show_hidden_files',
        name        : 'Show hidden files in Finder',
        description : 'By default, macOS hides hidden files in Finder',
        category    : 'Finder',
        infoUrl     : 'https://www.pcmag.com/how-to/how-to-access-your-macs-hidden-files',
        author      : 'BrewMyMac',
        parameters  : [
            'Show hidden files',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Finder',
    },
    {
        id          : 'finder.sidebar_icon_size',
        name        : 'Change sidebar icon size in Finder',
        description : 'Change the size of the icons in the sidebar of Finder. Specify "1" for small icons, "2" for medium icons, and "3" for large icons.',
        category    : 'Finder',
        infoUrl     : 'https://macos-defaults.com/finder/nstableviewdefaultsizemode.html',
        author      : 'BrewMyMac',
        parameters  : [
            'Sidebar icon size',
        ],
        types       : [
            'number',
        ],
        values      : [
            2,
        ],
        impact      : 'Finder',
    },
    {
        id          : 'finder.show_status_bar',
        name        : 'Show status bar in Finder',
        description : 'By default, macOS hides the status bar in Finder',
        category    : 'Finder',
        infoUrl     : 'https://www.mactrast.com/2017/03/show-status-bar-finder-macos-sierra/',
        author      : 'BrewMyMac',
        parameters  : [
            'Show status bar',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Finder',
    },
    {
        id          : 'finder.show_quit_option',
        name        : 'Show Quit option in Finder',
        description : 'By default, macOS hides the Quit option in Finder',
        category    : 'Finder',
        infoUrl     : 'https://macos-defaults.com/finder/quitmenuitem.html',
        author      : 'BrewMyMac',
        parameters  : [
            'Show Quit option in Finder',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Finder',
    },
    {
        id          : 'finder.keep_folders_on_top',
        name        : 'Keep folders on top when sorting by name in Finder',
        description : 'By default, Finder sorts a directory\'s contents by name, with both files and folders arranged alongside one another based upon an alphabetical sorting of their names.',
        category    : 'Finder',
        infoUrl     : 'https://www.idownloadblog.com/2019/02/12/finder-view-options-sort-order-mac-folder/',
        author      : 'BrewMyMac',
        parameters  : [
            'Keep folders on top when sorting by name in Finder',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Finder',
    },
    {
        id          : 'finder.file_extension_warnings',
        name        : 'Disable warnings when changing file extension in Finder',
        description : 'By default, macOS warns you when you change a file extension.',
        category    : 'Finder',
        infoUrl     : 'https://www.idownloadblog.com/2021/04/29/how-to-turn-off-warnings-for-file-extension-changes-on-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable file extension warnings',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Finder',
    },
    {
        id          : 'finder.view_style',
        name        : 'Set default view style in Finder',
        description : 'Finder can display files in a variety of ways and it may open up with a different view style each time. Specify "Nlsv" for list view, "icnv" for icon view, "clmv" for column view, "Flwv" for cover flow view, and "glyv" for gallery view.',
        category    : 'Finder',
        infoUrl     : 'https://osxdaily.com/2012/07/04/change-finder-window-view-style-command-line/',
        author      : 'BrewMyMac',
        parameters  : [
            'View style',
        ],
        types       : [
            'string',
        ],
        values      : [
            'Nlsv',
        ],
        impact      : 'Finder',
    },
    {
        id          : 'finder.spring_loading',
        name        : 'Enable spring loading effector for directories in Finder',
        description : 'By default, a spring-loaded folder pops open when you drag something onto its icon while holding down the mouse button.',
        category    : 'Finder',
        infoUrl     : 'https://www.lifewire.com/how-to-configure-finders-spring-loaded-folders-2260901',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable spring loading effect',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'finder.spring_loading_delay',
        name        : 'Change spring-loading delay in Finder',
        category    : 'Finder',
        description : 'You can customise the spring-loaded folder delay to suit your preference. The value is in seconds.',
        author      : 'BrewMyMac',
        parameters  : [
            'Spring loading delay in seconds',
        ],
        types       : [
            'number',
        ],
        values      : [
            1,
        ],
    },
    {
        id          : 'file.ds_store',
        name        : 'Disable .DS_Store file creation on network volumes',
        description : 'By default, macOS creates .DS_Store files on network volumes to store custom attributes of the folder.',
        category    : 'File management',
        infoUrl     : 'https://www.techrepublic.com/article/how-to-disable-the-creation-of-dsstore-files-for-mac-users-folders/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable .DS_Store file creation',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'file.empty_trash_warning',
        name        : 'Disable warnings about emptying trash',
        description : 'By default, macOS warns you when you empty the trash',
        category    : 'File management',
        infoUrl     : 'https://www.howtogeek.com/714198/how-to-disable-the-empty-trash-warning-on-a-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable warnings about emptying trash',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Finder',
    },
    {
        id          : 'file.auto_empty_trash',
        name        : 'Empty trash automatically after 30 days',
        description : 'By default, macOS does not empty the trash automatically.',
        category    : 'File management',
        infoUrl     : 'https://www.macrumors.com/how-to/automatically-empty-trash-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Empty trash automatically after 30 days',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Finder',
    },
    {
        id          : 'appearance.dock_position',
        name        : 'Change Dock position',
        description : 'You can change the position of the Dock to the left, bottom, or right side of the screen',
        category    : 'Appearance',
        infoUrl     : 'https://appleinsider.com/inside/macos/tips/how-to-move-or-hide-the-dock-in-macos',
        author      : 'BrewMyMac',
        parameters  : [
            'Dock position',
        ],
        types       : [
            'string',
        ],
        values      : [
            'bottom',
        ],
        impact      : 'Dock',
    },
    {
        id          : 'appearance.dock_icon_size',
        name        : 'Set Dock icon size',
        description : 'You can change the size of the Dock icons to an exact number in pixels',
        category    : 'Appearance',
        infoUrl     : 'https://www.businessinsider.com/guides/tech/how-to-change-dock-size-on-mac?r=US&IR=T',
        author      : 'BrewMyMac',
        parameters  : [
            'Dock icon size in pixels',
        ],
        types       : [
            'number',
        ],
        values      : [
            32,
        ],
    },
    {
        id          : 'appearance.lock_dock_icon_size',
        name        : 'Lock Dock icon size',
        description : 'You can lock the size of the Dock icons to prevent them from being resized',
        category    : 'Appearance',
        infoUrl     : 'https://www.idownloadblog.com/2020/01/15/how-to-lock-the-dock-on-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Lock Dock icon size',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Dock',
    },
    {
        id          : 'appearance.dock_spring_loading',
        name        : 'Enable Dock icons spring loading',
        description : 'Dock icons can operate with the same spring-loaded features as folders. By default, this feature is disabled.',
        category    : 'Appearance',
        infoUrl     : 'https://macos-defaults.com/misc/enable-spring-load-actions-on-all-items.html',
        author      : 'BrewMyMac',
        parameters  : [
            'Enable Dock icons spring loading',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Dock',
    },
    {
        id          : 'appearance.recent_apps',
        name        : 'Disable showing recent applications in Dock',
        description : 'By default, macOS shows three most recent applications in the Dock',
        category    : 'Appearance',
        infoUrl     : 'https://www.macobserver.com/tips/how-to/remove-icons-recently-used-apps-mac-dock/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable showing recent applications in Dock',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        impact      : 'Dock',
    },
    {
        id          : 'appearance.dock_animation',
        name        : 'Change Dock animation effect',
        description : 'macOS animates the Dock when you open or close an application. Supported effects are "genie", "scale" and "suck".',
        category    : 'Appearance',
        author      : 'BrewMyMac',
        parameters  : [
            'Change Dock animation effect',
        ],
        types       : [
            'string',
        ],
        values      : [
            'genie',
        ],
        impact      : 'Dock',
    },
    {
        id          : 'appearance.dark_mode',
        name        : 'Set theme to dark mode',
        description : 'Specify "Dark" to set the theme to dark mode and "Light" to set it to light mode',
        category    : 'Appearance',
        author      : 'BrewMyMac',
        parameters  : [
            'Default theme mode',
        ],
        types       : [
            'string',
        ],
        values      : [
            "Dark",
        ],
    },
    {
        id          : 'preference.swipe_navigation',
        name        : 'Disable swipe navigation in Google Chrome',
        description : 'By default, even if you have disabled the system-wide "Swipe between pages" feature, Google Chrome still allows you to swipe between pages.',
        category    : 'Preferences',
        infoUrl     : 'https://medium.com/@victoraremu/disable-two-finger-swipe-left-right-page-navigation-gesture-of-chromium-based-browsers-on-macos-5f2ed57b65a5',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable swipe navigation in Google Chrome',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'preference.tunes_media_keys',
        name        : 'Disable iTunes media keys',
        description : 'If you have iTunes installed, when you press Play on the keyboard, or connect a headset or Bluetooth speaker, iTunes will automatically run.',
        category    : 'Preferences',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable iTunes media keys',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'preference.mouse_shake',
        name        : 'Disable "shake mouse pointer to locate" feature',
        description : 'By default, the mouse cursor in macOS gets really big when you shake the mouse or when you move it too quickly',
        category    : 'Preferences',
        infoUrl     : 'https://www.danrodney.com/blog/disable-macos-big-cursor-with-shake/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable shake mouse pointer to locate',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'preference.display_sleep',
        name        : 'Put display to sleep due to inactivity',
        description : 'You can put the display to sleep for battery saving or privacy reasons',
        category    : 'Preferences',
        infoUrl     : 'https://www.idownloadblog.com/2023/03/23/how-to-change-sleep-time-on-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Put display to sleep delay in minutes',
        ],
        types       : [
            'number',
        ],
        values      : [
            10,
        ],
        privileged  : true,
    },
    {
        id          : 'preference.computer_sleep',
        name        : 'Put computer to sleep due to inactivity',
        description : 'You can put the computer to sleep for battery saving or privacy reasons. Specify 0 to disable it.',
        category    : 'Preferences',
        infoUrl     : 'https://mackeeper.com/blog/how-to-change-sleep-settings/',
        author      : 'BrewMyMac',
        parameters  : [
            'Put computer to sleep delay in minutes',
        ],
        types       : [
            'number',
        ],
        values      : [
            0,
        ],
        privileged  : true,
    },
    {
        id          : 'preference.keep_windows',
        name        : 'Always keep windows',
        description : 'macOS can remember all the tabs and windows you had opened for the next time you launch it again',
        category    : 'Preferences',
        author      : 'BrewMyMac',
        parameters  : [
            'Keep windows',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
    },
    {
        id          : 'preference.crash_reports',
        name        : 'Disable crash reports',
        description : 'The crash reporter takes up a lot of resources and if you are a developer, you may quickly get annoyed by the constant popups.',
        category    : 'Preferences',
        infoUrl     : 'https://jonathansblog.co.uk/disable-reportcrash-osx-lion',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable crash reports',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        privileged  : true,
    },
    {
        id          : 'preference.software_update_frequency',
        name        : 'Change software update frequency',
        description : 'macOS automatically checks for software updates but you cannot change how often it checks in System Preferences',
        category    : 'Preferences',
        infoUrl     : 'https://www.idownloadblog.com/2016/02/23/change-how-often-mac-checks-software-updates/',
        author      : 'BrewMyMac',
        parameters  : [
            'Software update frequency in days',
        ],
        types       : [
            'number',
        ],
        values      : [
            1,
        ],
    },
    {
        id          : 'preference.default_shell',
        name        : 'Change default shell',
        description : 'Specify the default shell. Supported values are "bash", "csh", "dash", "ksh", "sh", "tcsh", and "zsh".',
        category    : 'Preferences',
        infoUrl     : 'https://www.howtogeek.com/444596/how-to-change-the-default-shell-to-bash-in-macos-catalina/',
        author      : 'BrewMyMac',
        parameters  : [
            'Default shell',
        ],
        types       : [
            'string',
        ],
        values      : [
            'bash',
        ],
    },
    {
        id          : 'preference.computer_name',
        name        : 'Change computer name',
        description : 'Specify the computer name',
        category    : 'Preferences',
        infoUrl     : 'https://www.businessinsider.com/guides/tech/how-to-change-mac-name?r=US&IR=T',
        author      : 'BrewMyMac',
        parameters  : [
            'Computer name',
        ],
        types       : [
            'string',
        ],
        values      : [
            'BrewMyMac',
        ],
        privileged  : true,
    },
    {
        id          : 'preference.boot_sound',
        name        : 'Disable boot sound',
        description : 'By default, macOS plays a sound when you boot up your computer',
        category    : 'Preferences',
        infoUrl     : 'https://www.howtogeek.com/260693/how-to-disable-the-boot-sound-or-startup-chime-on-a-mac/',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable boot sound',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        privileged  : true,
    },
    {
        id          : 'performance.memory_compression',
        name        : 'Disable memory compression and swap',
        description : 'You may want to disable memory compression and swap to improve performance and prolong the SSD drive lifetime. However, this may cause the system to crash if you run out of memory.',
        category    : 'Preferences',
        infoUrl     : 'https://www.lifewire.com/understanding-compressed-memory-os-x-2260327',
        author      : 'BrewMyMac',
        parameters  : [
            'Disable memory compression and swap',
        ],
        types       : [
            'boolean',
        ],
        values      : [
            true,
        ],
        privileged  : true,
        sipInvolved : true,
    },
];
