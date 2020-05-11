import { Injectable } from '@nestjs/common';
import {getManager, getConnectionManager, createConnection, EntityManager, Connection} from "typeorm";

@Injectable()
export class EntityManagerService {

    connection: Promise<Connection>    

    constructor () {
        this.connection = createConnection();
    }
    
    public async getManager() {

        
        return (await this.connection).manager;
    }
}
