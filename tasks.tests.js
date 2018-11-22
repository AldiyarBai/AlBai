import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';

import { Tasks } from './tasks.js';

if (Meteor.isServer) {
  // Работает только на сервере
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId;

      beforeEach(() => {
        // Перед каждой задачей//
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('can delete owned task', () => {
//  Удаляет собственную задачу//
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];

        // Вызов sign-in как в ожиданий//
        const invocation = { userId };

        deleteTask.apply(invocation, [taskId]);

        // Подтверждение(проверить) что мы пытались сделать, работает ли он//
        assert.equal(Tasks.find().count(), 0);
      });
    });
  });
}