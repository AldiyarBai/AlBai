// указывает файлы которые нужно открыть и использовать //
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../client/main.html'
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';
// открывает документ(render-target который в main.html) для начала работы//
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});