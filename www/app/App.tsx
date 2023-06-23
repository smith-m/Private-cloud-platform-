/// <reference path="References.d.ts"/>
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as Blueprint from '@blueprintjs/core';
import Main from './components/Main';
import * as Alert from './Alert';
import * as Event from './Event';
import * as Csrf from './Csrf';
import { useEffect } from 'react';

function MainWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });
  return <Main />
}

Csrf.load().then((): void => {
	Blueprint.FocusStyleManager.onlyShowFocusOnTabs();
	Alert.init();
	Event.init();

	const container = document.getElementById('app');
	const root = createRoot(container);
	root.render(
		<div><MainWithCallbackAfterRender/></div>,
	);
});