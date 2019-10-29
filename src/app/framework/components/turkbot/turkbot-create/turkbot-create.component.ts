import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { Turkbot } from '../../../../entity/turkbot.entity'
import { CreateTurkbot } from '../../../../presentation/turkbot/turkbot.actions'
import { getTurkbotsLoading } from '../../../../presentation/turkbot/turkbot.selectors'
import { State } from '../../../../presentation'
import { validateFields } from '../../../utilities/form.utilities'

@Component({
  selector: 'turkbot-create',
  templateUrl: './turkbot-create.component.html',
  styleUrls: ['./turkbot-create.component.scss'],
})
export class TurkbotCreateComponent implements OnInit {

  loading$: Observable<boolean>
  form: FormGroup

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(getTurkbotsLoading))
    this.clearForm()
  }

  clearForm() {
    this.form = new FormGroup({
      // TODO: Configure / add required fields and validators
      name: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    })
  }

  validate() {
    if (this.form.valid) this.uploadTurkbot()
    else validateFields(this.form)
  }

  uploadTurkbot() {
    let turkbot: Turkbot = {
      id: '',
      created: new Date(),
      updated: new Date(),
      // TODO: Add required fields / perform additional logic
      name: this.form.controls['name'].value,
      url: this.form.controls['url'].value,
      description: this.form.controls['description'].value,
    }

    this.store.dispatch(new CreateTurkbot({ turkbot: turkbot }))
  }
}
