import { put, takeLatest, call } from 'redux-saga/effects';
import clientService from '../../services/ClientsService';
import {addClient, getClient} from "../actions/Clients";
import {CLIENT_ADD, CLIENT_GET} from "../constants/Clients";

function* getClientsWorker() {
        const response = yield call(clientService.getClients)
        yield put(addClient(response));
}

function* clientsSagaWatcher() {
    yield takeLatest(CLIENT_GET,getClientsWorker);
}

export default clientsSagaWatcher
