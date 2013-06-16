jPane
=====

### Summary:

Sliding panes where the active pane is and the previous pane are in the golden ratio and all other panes are 1em big.

Adding a new pane puts a pane on the right of the active pane discarding all other panes to the right of that pane and returns a link to that dom object.

### Example:

	global.jp = new jPane(document.getElementById('host'));
	global.jp.pane1 = global.jp.getHost().firstChild;
	global.jp.pane2 = global.jp.add("<h1>Pane 2</h1><p>This is the second pane</p>");

