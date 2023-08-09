import { FC } from 'react';
import {
    MenuBar,
    MenuBarMenu,
    MenuBarTrigger,
    MenuBarContent,
    MenuBarItem,
    MenuBarSeparator,
    MenuBarShortcut,
    MenuBarSub,
    MenuBarSubTrigger,
    MenuBarSubContent,
    MenuBarCheckboxItem,
    MenuBarLabel,
    MenuBarRadioGroup,
    MenuBarRadioItem,
} from './MenuBar';

export const Menu: FC = () => {
    return (
        <MenuBar className="rounded-none border-b border-none px-2 lg:px-4">
            <MenuBarMenu>
                <MenuBarTrigger className="font-bold">Music</MenuBarTrigger>
                <MenuBarContent>
                    <MenuBarItem>About Music</MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarItem>
                        Preferences... <MenuBarShortcut>⌘,</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarItem>
                        Hide Music... <MenuBarShortcut>⌘H</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarItem>
                        Hide Others... <MenuBarShortcut>⇧⌘H</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarShortcut />
                    <MenuBarItem>
                        Quit Music <MenuBarShortcut>⌘Q</MenuBarShortcut>
                    </MenuBarItem>
                </MenuBarContent>
            </MenuBarMenu>
            <MenuBarMenu>
                <MenuBarTrigger className="relative">File</MenuBarTrigger>
                <MenuBarContent>
                    <MenuBarSub>
                        <MenuBarSubTrigger>New</MenuBarSubTrigger>
                        <MenuBarSubContent className="w-[230px]">
                            <MenuBarItem>
                                Playlist <MenuBarShortcut>⌘N</MenuBarShortcut>
                            </MenuBarItem>
                            <MenuBarItem disabled>
                                Playlist from Selection{' '}
                                <MenuBarShortcut>⇧⌘N</MenuBarShortcut>
                            </MenuBarItem>
                            <MenuBarItem>
                                Smart Playlist...{' '}
                                <MenuBarShortcut>⌥⌘N</MenuBarShortcut>
                            </MenuBarItem>
                            <MenuBarItem>Playlist Folder</MenuBarItem>
                            <MenuBarItem disabled>Genius Playlist</MenuBarItem>
                        </MenuBarSubContent>
                    </MenuBarSub>
                    <MenuBarItem>
                        Open Stream URL... <MenuBarShortcut>⌘U</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarItem>
                        Close Window <MenuBarShortcut>⌘W</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarSub>
                        <MenuBarSubTrigger>Library</MenuBarSubTrigger>
                        <MenuBarSubContent>
                            <MenuBarItem>Update Cloud Library</MenuBarItem>
                            <MenuBarItem>Update Genius</MenuBarItem>
                            <MenuBarSeparator />
                            <MenuBarItem>Organize Library...</MenuBarItem>
                            <MenuBarItem>Export Library...</MenuBarItem>
                            <MenuBarSeparator />
                            <MenuBarItem>Import Playlist...</MenuBarItem>
                            <MenuBarItem disabled>
                                Export Playlist...
                            </MenuBarItem>
                            <MenuBarItem>Show Duplicate Items</MenuBarItem>
                            <MenuBarSeparator />
                            <MenuBarItem>Get Album Artwork</MenuBarItem>
                            <MenuBarItem disabled>Get Track Names</MenuBarItem>
                        </MenuBarSubContent>
                    </MenuBarSub>
                    <MenuBarItem>
                        Import... <MenuBarShortcut>⌘O</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarItem disabled>Burn Playlist to Disc...</MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarItem>
                        Show in Finder <MenuBarShortcut>⇧⌘R</MenuBarShortcut>{' '}
                    </MenuBarItem>
                    <MenuBarItem>Convert</MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarItem>Page Setup...</MenuBarItem>
                    <MenuBarItem disabled>
                        Print... <MenuBarShortcut>⌘P</MenuBarShortcut>
                    </MenuBarItem>
                </MenuBarContent>
            </MenuBarMenu>
            <MenuBarMenu>
                <MenuBarTrigger>Edit</MenuBarTrigger>
                <MenuBarContent>
                    <MenuBarItem disabled>
                        Undo <MenuBarShortcut>⌘Z</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarItem disabled>
                        Redo <MenuBarShortcut>⇧⌘Z</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarItem disabled>
                        Cut <MenuBarShortcut>⌘X</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarItem disabled>
                        Copy <MenuBarShortcut>⌘C</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarItem disabled>
                        Paste <MenuBarShortcut>⌘V</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarItem>
                        Select All <MenuBarShortcut>⌘A</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarItem disabled>
                        Deselect All <MenuBarShortcut>⇧⌘A</MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarItem>
                        Smart Dictation...{' '}
                        <MenuBarShortcut>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                                <circle cx="17" cy="7" r="5" />
                            </svg>
                        </MenuBarShortcut>
                    </MenuBarItem>
                    <MenuBarItem>
                        Emoji & Symbols{' '}
                        <MenuBarShortcut>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </MenuBarShortcut>
                    </MenuBarItem>
                </MenuBarContent>
            </MenuBarMenu>
            <MenuBarMenu>
                <MenuBarTrigger>View</MenuBarTrigger>
                <MenuBarContent>
                    <MenuBarCheckboxItem>Show Playing Next</MenuBarCheckboxItem>
                    <MenuBarCheckboxItem checked>
                        Show Lyrics
                    </MenuBarCheckboxItem>
                    <MenuBarSeparator />
                    <MenuBarItem inset disabled>
                        Show Status Bar
                    </MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarItem inset>Hide Sidebar</MenuBarItem>
                    <MenuBarItem disabled inset>
                        Enter Full Screen
                    </MenuBarItem>
                </MenuBarContent>
            </MenuBarMenu>
            <MenuBarMenu>
                <MenuBarTrigger className="hidden md:block">
                    Account
                </MenuBarTrigger>
                <MenuBarContent forceMount>
                    <MenuBarLabel inset>Switch Account</MenuBarLabel>
                    <MenuBarSeparator />
                    <MenuBarRadioGroup value="benoit">
                        <MenuBarRadioItem value="andy">Andy</MenuBarRadioItem>
                        <MenuBarRadioItem value="benoit">
                            Benoit
                        </MenuBarRadioItem>
                        <MenuBarRadioItem value="Luis">Luis</MenuBarRadioItem>
                    </MenuBarRadioGroup>
                    <MenuBarSeparator />
                    <MenuBarItem inset>Manage Famliy...</MenuBarItem>
                    <MenuBarSeparator />
                    <MenuBarItem inset>Add Account...</MenuBarItem>
                </MenuBarContent>
            </MenuBarMenu>
        </MenuBar>
    );
};
