import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'

import { TurkbotNetwork } from '../../domain/gateways/network/turkbot.network'
import { FirebaseNetworkGateway } from '@ascendedco/architecture'
import { Turkbot } from '../../entity/turkbot.entity'

@Injectable()
export class FirebaseTurkbotNetwork extends FirebaseNetworkGateway<Turkbot> implements TurkbotNetwork {

  constructor(firestore: AngularFirestore) {
    // TODO: Replace turkbot with the correct path
    super(firestore, 'turkbots')
  }
  
}

