import {Injectable} from '@angular/core';
import {Trailer} from './models/trailer.model';
import {Subject} from 'rxjs';

@Injectable()
export class TrailerService {

  trailers: Trailer[] = [
    {id: 1, companyId: 1, number: '1001', type: 'Reefer', location: 'Portland, OR', broken: false, available: false, railroad: false},
    {id: 2, companyId: 1, number: '1002', type: 'Reefer', location: 'Renton, WA', broken: false, available: false, railroad: false},
    {id: 3, companyId: 1, number: '1003', type: 'Reefer', location: 'Addison, IL', broken: false, available: true, railroad: false},
    {id: 4, companyId: 1, number: '1010', type: 'Dry', location: 'Addison, IL', broken: false, available: true, railroad: false},
    {id: 5, companyId: 1, number: '1004', type: 'Reefer', location: 'Portland, OR', broken: false, available: true, railroad: false},
    {id: 6, companyId: 1, number: '10158', type: 'Reefer', location: 'Renton, WA', broken: false, available: true, railroad: true},
    {id: 7, companyId: 1, number: '1070', type: 'Reefer', location: 'Addison, IL', broken: true, available: false, railroad: false},
    {id: 8, companyId: 1, number: '1030', type: 'Dry', location: 'Renton, WA', broken: false, available: true, railroad: false},
    {id: 9, companyId: 1, number: '1020', type: 'Reefer', location: 'Addison, IL', broken: false, available: false, railroad: false},
    {id: 10, companyId: 1, number: '1011', type: 'Reefer', location: 'Addison, IL', broken: false, available: false, railroad: false},
    {id: 11, companyId: 1, number: '10014', type: 'Reefer', location: 'Renton, WA', broken: true, available: false, railroad: false},
    {id: 12, companyId: 1, number: '10100', type: 'Dry', location: 'Addison, IL', broken: false, available: true, railroad: true},
    {id: 13, companyId: 1, number: '1005', type: 'Reefer', location: 'Addison, IL', broken: false, available: false, railroad: false},
    {id: 14, companyId: 1, number: '1016', type: 'Reefer', location: 'Portland, OR', broken: false, available: false, railroad: false},
    {id: 15, companyId: 1, number: '1025', type: 'Reefer', location: 'Addison, IL', broken: true, available: false, railroad: false},
    {id: 16, companyId: 1, number: '10101', type: 'Dry', location: 'Addison, IL', broken: false, available: true, railroad: true}
  ];

  trailersChanged = new Subject<Trailer[]>();

  constructor() {}

  getTrailers() {
    this.trailersChanged.next(this.trailers);
  }
}