# sketch changelog
from commits [862e74c](https://github.com/quackbarc/sketch/commit/862e74c44b2d41a2ead55002fb92ae7a1911f468)
to [a30554a](https://github.com/quackbarc/sketch/commit/a30554a96bc715d867d53af4ef2d76045c19ec43)
(august 27 to september 23)

## big tweaks:
* added an etch-a-sketch mode
* new keybind for pen: `B`
* new settings UI
* animation speed of sketch swaps is now adjustable
* clicking on sketch swaps will skip its animation entirely
* the canvas can now be copied as an image with ctrl+alt+C
	* note: this won't work on Firefox by default, unless `asyncClipboard.clipboardItem` is enabled in the flags.
* swap button is now toggleable. good for small screen users who always have the button on the way
	* swapping is still possible with `ctrl`+`enter`.

## small tweaks:
* swapping is disabled for drawings with 0 ink or less
* swap statistics now start with "-"
* swap statistics now refresh every 10 seconds instead of 3
* swap statistics automatically hide on resize
* ink shown on the toolbar is now floored instead than rounded
* toolbar will notify on copying and pasting sketches
* pasting invalid data to the client will be rejected
* blank lines will not be pushed to the history
	* not really necessary after the drawing logic fix

## bug fixes:
* eraser actions corrupt the drawing on undo
* `ctrl`+`S` still opens up the default browser save window
* toolbar will be highlighted while drawing -- usually happens on pen tablets
* drawing logic allows duplicate points, affecting ink usage

---

this changelog would've been better as a project but i decided "nah. markdown file is cooler"
