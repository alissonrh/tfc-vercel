import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp); // o chaiHttp usa o request

const { expect } = chai;

describe('Teste da rota login', () => {
  it('deve retornar um status 200', async () => { 
    const httpResponse = await chai.request(app).get('/login') // o chai
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal({ message: 'Teste ok' })
  });
});
