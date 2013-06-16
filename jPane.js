function jPane(con) {
	'use strict';
	var host = con, _remove, _removeAndNext, _markActive, _removeAfter, _add, _getHost, _reset;
	host.classList.add('host');

	_markActive = function (dom) {
		var c = document.getElementById('host').childNodes;
		for (var e in c) {
			if (c[e].toString() === "[object HTMLDivElement]") {
				c[e].classList.remove('active');
				c[e].classList.remove('priorActive');
			}
		}
		if (dom.previousElementSibling) dom.previousElementSibling.classList.add('priorActive');
		dom.classList.add('active');
	};

	_add = function (inHTML) {
		_removeAfter();
		var newPane = document.createElement("div");
		newPane.classList.add('jPane');
		if (inHTML) newPane.innerHTML = inHTML;
		host.appendChild(newPane);
		_markActive(newPane);
		newPane.onclick = function () {_markActive(this); };
		return newPane;
	};

	_remove = function (dom) {
		_markActive(dom.previousElementSibling);
		dom.parentNode.removeChild(dom);
	};

	_removeAfter = function () {
		var c = host.querySelectorAll(".jPane.active~.jPane");
		for (var e in c) {
			if (c[e].toString() === "[object HTMLDivElement]") {
				host.removeChild(c[e]);
			}
		}
	};

	_removeAndNext = function (dom) {
		_markActive(dom.previousElementSibling);
		_removeAfter();
	};

	_getHost = function () {
		return host;
	};

	_reset = function (inHTML) {
		host.innerHTML = "";
		_add(inHTML);
	};

	(function () {
		if (host.innerHTML !== "") {
			var temp = host.innerHTML;
			host.innerHTML = "";
			_add(temp);
		}
	})();

	var JPane = function () {};
	JPane.prototype.remove = _remove;
	JPane.prototype.removeAndNext = _removeAndNext;
	JPane.prototype.markActive = _markActive;
	JPane.prototype.removeAfter = _removeAfter;
	JPane.prototype.add = _add;
	JPane.prototype.getHost = _getHost;
	JPane.prototype.reset = _reset;

	return new JPane;
}
