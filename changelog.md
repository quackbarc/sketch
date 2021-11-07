# sketch changelog
from commits [4e7c73e](https://github.com/quackbarc/sketch/commit/4e7c73ea87784cdadc65dda8b590869b6a31964a)
to [82d31b5](https://github.com/quackbarc/sketch/commit/82d31b5318a5bf2c4cddf5abff7f0da748b2b34e)
(october 3 to november 7)

### big tweaks
* added screentoning tool
    * this was mostly ported from [noz's client](https://nozz.duckdns.org/sketch/)
    * keybind: `S`
* added fill tool
    * keybind: `F`
* added tool menus for settings related to tools
    * clicking or pressing a hotkey again on an activated tool will open them up
* added setting for eraser size
* added toggle to restrict drawing when the ink limit has been reached
* added toggle to automatically detect screentones from pasted sketches to prevent screentones from overlapping
* added `[`/`]` keybinds for changing eraser/screentone sizes
* toolbar now uses a new font ([Jost](https://fonts.google.com/specimen/Jost)) and a different color for disabled buttons
* crunge favicon! ![crunge](favicon.ico "truly the flagship icon of garyc.me/sketch")

### small tweaks
* using sketchy-bot's CORS proxy instead of my own
* swapping will change dots to faux-dots renderable on garyc.me
* client will also notify:
    * if you can't copy the canvas image (with `ctrl`+`alt`+`C`)
    * if you can't paste sketch data
* animation speed can now only go up to 30
* auto-saves now take screentones into account
* current tool and tool settings will also get auto-saved
* hiding of site statistics is now default
* site statistics will now only update when the page is visible

### bug fixes
* hiding of stats doesn't get fired on page load
* moving empty sketches are still committed onto history
* sketches won't auto-save when their tabs unload over time
* settings don't restore some saved settings (i.e. toggleable settings) properly
* multiple toolbar alerts don't properly disappear after 3 seconds
* pasting data with broken coordinates/with a character short causes a crash
* toning with a spacing double the radius size won't actually tone
* filling has offset lines thanks to me bodging the logic

---

from commits [862e74c](https://github.com/quackbarc/sketch/commit/862e74c44b2d41a2ead55002fb92ae7a1911f468)
to [a30554a](https://github.com/quackbarc/sketch/commit/a30554a96bc715d867d53af4ef2d76045c19ec43)
(august 27 to september 23)

### big tweaks:
* added an etch-a-sketch mode
* new keybind for pen: `B`
* new settings UI
* animation speed of sketch swaps is now adjustable
* clicking on sketch swaps will skip its animation entirely
* the canvas can now be copied as an image with `ctrl`+`alt`+`C`
    * note: this won't work on Firefox by default, unless `asyncClipboard.clipboardItem` is enabled in the flags.
* swap button is now toggleable. good for small screen users who always have the button on the way
    * swapping is still possible with `ctrl`+`enter`.

### small tweaks:
* swapping is disabled for drawings with 0 ink or less
* swap statistics now start with "-"
* swap statistics now refresh every 10 seconds instead of 3
* swap statistics automatically hide on resize
* ink shown on the toolbar is now floored instead than rounded
* toolbar will notify on copying and pasting sketches
* pasting invalid data to the client will be rejected
* blank lines will not be pushed to the history
    * not really necessary after the drawing logic fix

### bug fixes:
* eraser actions corrupt the drawing on undo
* `ctrl`+`S` still opens up the default browser save window
* toolbar will be highlighted while drawing -- usually happens on pen tablets
* drawing logic allows duplicate points, affecting ink usage

---

this changelog would've been better as a project but i decided "nah. markdown file is cooler"
