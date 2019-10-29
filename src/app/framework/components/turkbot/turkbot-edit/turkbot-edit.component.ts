import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { select, Store } from '@ngrx/store'

import { Turkbot } from '../../../../entity/turkbot.entity'
import { UpdateTurkbot } from '../../../../presentation/turkbot/turkbot.actions'
import { getCurrentTurkbot, getTurkbotsLoading } from '../../../../presentation/turkbot/turkbot.selectors'
import { State } from '../../../../presentation'
import { validateFields } from '../../../utilities/form.utilities'

@Component({
  selector: 'turkbot-edit',
  templateUrl: './turkbot-edit.component.html',
  styleUrls: ['./turkbot-edit.component.scss']
})
export class TurkbotEditComponent implements OnInit {

  loading$: Observable<boolean>
  turkbot$: Observable<Turkbot>
  form: FormGroup

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.clearForm()
    this.turkbot$ = this.store.pipe(select(getCurrentTurkbot), tap(turkbot => this.updateForm(turkbot)))
    this.loading$ = this.store.pipe(select(getTurkbotsLoading))
  }

  clearForm() {
    this.form = new FormGroup({
      // TODO: Configure / add required fields and validators
      name: new FormControl(null, Validators.required),
      url: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    })
  }

  updateForm(turkbot: Turkbot) {
    if (turkbot !== null) this.form.patchValue({
      // name: turkbot.name,
      // TODO: Add required fields / perform additional logic
      name: turkbot.name,
      url: turkbot.url,
      description: turkbot.description,
    })
  }

  validate(turkbot: Turkbot) {
    if (this.form.valid) this.uploadTurkbot(turkbot)
    else validateFields(this.form)
  }

  uploadTurkbot(turkbot: Turkbot) {
    let updated: Turkbot = {
      ...turkbot,
      // TODO: Add required fields / perform additional logic
      name: this.form.controls['name'].value,
      url: this.form.controls['url'].value,
      description: this.form.controls['description'].value,
    }

    this.store.dispatch(new UpdateTurkbot({ turkbot: updated }))
  }
}
