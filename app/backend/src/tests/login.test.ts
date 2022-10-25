import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/user.model';

import { Response } from 'superagent';
import { Model } from 'sequelize/types';
import { IUserRepository } from '../interfaces/user.interface';
import { before } from 'mocha';
import UserRepository from '../model/repository/user.repositori';

chai.use(chaiHttp); // o chaiHttp usa o request

const { expect } = chai;

describe('POST /login', () => {
  describe('quando o campo email não é informado', () => {
    it('deve retornar um status 400', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          password: "any_string"
        })
      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ "message": "All fields must be filled" })
    })
  })
  describe('quando o campo password não é informado', () => {
    it('deve retornar um status 400', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          email: 'any_amail'
        })
      expect(httpResponse.status).to.equal(400)
      expect(httpResponse.body).to.deep.equal({ "message": "All fields must be filled" })
    })
  })

  describe('quando todos os campos forem validos', () => {
    it('deve retornar um status 200', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          password: "any_string",
          email: 'any_amail'
        })
      expect(httpResponse.status).to.equal(200)
    })
  })

  /* describe('quando o email é invalidos', () => {
    const user: IUserRepository = {
      id: 1,
      username: 'Admin',
      role: 'admin',
      email: 'admin@admin.com',
      password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
    }
    before(() => sinon.stub(Model, 'findOne').resolves(user as any))
    after(() => sinon.restore())
    it('deve retornar um status 401', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({
          password: "any_string",
          email: 'any_amail'
        })
      expect(httpResponse.status).to.equal(401)
    })
  }) */
});
