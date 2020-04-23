import { TimeLineComponent } from './../time-line/time-line.component';
import { DoseFxService } from './../dose-fx.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


export interface beamTypes {
  id: number;
  name: string;
}
export interface beam {
  id: number;
  value: string;
}
export interface editParam{                                                   // colName and editValue are an array 
  colName: string;
  editVal: string;
}
export interface dBParams {                                                   // dS used to edit dataBase
  tableName: string;
  docidx: number;
  editParams: editParam[];
}

export interface beamGroup {
  disabled?: boolean;
  name: string;
  beam: beam[];
}

@Component({
  selector: 'app-dose-fx',
  templateUrl: './dose-fx.component.html',
  styleUrls: ['./dose-fx.component.css']
})
export class DoseFxComponent implements OnInit {

  beamGroups: beamGroup[] = [                                                   // parameters for the BeamType drop down. 
    {
      name: 'Photons',
      beam: [
        {id:1, value: '6Mv'},
        {id:2, value: '10Mv'},
        {id:3, value: '15Mv'},
        {id:3, value: '6_&_10Mv'},
        {id:3, value: '6_&_15Mv'},
      ]
    },
    {
      name: 'Protons',
      beam: [
        { id: 11, value: 'Protons_BS'},
        { id: 12, value: 'Protons_DS'},
        { id: 13, value: 'Protons_Star'},
        { id: 13, value: 'Protons_EYE'},
      ]
    },
    {
      name: 'Electrons',
      disabled: false,
      beam: [
        { id: 21, value: 'Electrons'},
      ]
    },
  ];
  editParamSet: dBParams = 
    {
      tableName: 'AWWD_Plans',
      docidx: 1,
      editParams: [
        {colName: '', editVal: ''},
      ]
    };
  DoseFxSvce: DoseFxService;
  selectedBeamType = '';
  
  constructor(private route: ActivatedRoute, DoseFxSvce: DoseFxService) { 
    this.DoseFxSvce  = DoseFxSvce;
  }
  form = new FormGroup({                                                // create FormGroup
    'Dose': new FormControl(''),                                        // create all the controls in the FormGroup
    'fxDose': new FormControl(''),
    'numFx': new FormControl(''),
    'planName': new FormControl(''),
    'beamType': new FormControl(this.selectedBeamType),
    'generalConsideration': new FormControl(''),
  });
  ngOnInit() {
    this.route.paramMap.subscribe(params => {                             // get the data from the url GET line
        this.editParamSet.docidx = +params.get('docidx'); 
        this.DoseFxSvce.setDBP("AWWD_Plans", +params.get('docidx'));
                    })                // set the docidx
    this.DoseFxSvce.getData(this.editParamSet.docidx, this.editParamSet.tableName).subscribe( // get the data from dB for this docidx
      (val) => {
        if (val) {                                                        // if there is data from dB
          this.form.get('Dose').setValue(val['dose']);                    // write the data to the form 
          this.form.get('fxDose').setValue(val['fxDose']);
          this.form.get('numFx').setValue(val['numFx']);
          this.form.get('beamType').setValue(val['beamType']);
          this.form.get('planName').setValue(val['planName']);
          this.form.get('generalConsideration').setValue(val['generalConsideration']);
        }
      });   
   
  }
  /*
  editVal($event, colName){
    this.editParamSet.editParams[0].colName = colName;
  
    if ( $event.target )                                  // for 'input' fields
      this.editParamSet.editParams[0].editVal = $event.target.value;
    if ( $event.value )                                   // for 'select' fields
      this.editParamSet.editParams[0].editVal = $event.value;
    if (colName == 'fxDose' && +this.form.get('Dose').value > 0 ) {       // if enteredVal is fxDose and Dose > 0 set numFx=Dose/fxDose
      const numFxE = +this.form.get('Dose').value/ $event.target.value;   // calulate Dose/fxDose
      this.form.get('numFx').setValue(numFxE);                            // set value of numFx in form
      const pushVal: editParam = {                                        // create a editParam to push onto editParamSet
        colName: 'numFx',
        editVal: String(numFxE)
      }
      this.editParamSet.editParams.push(pushVal);                         // push 

    } 
    this.DoseFxSvce.update(this.editParamSet)                             // do the update. 
  }
  */
}
