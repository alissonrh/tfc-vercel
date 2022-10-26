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
});
