const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/Todo');

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        const text = 'test todo text'

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text)
        })
        .end((err, res) => {
            if(err) {
                return done(err)
            }
            Todo.find()
        })
    })
})