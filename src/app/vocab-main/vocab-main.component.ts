import { Component, OnInit } from '@angular/core';
import { JapanVocab, VocabList, VocabRepository } from '../domain';
@Component({
  selector: 'app-vocab-main',
  templateUrl: './vocab-main.component.html',
  styleUrls: ['./vocab-main.component.css']
})
export class VocabMainComponent implements OnInit {
  private vocabList: VocabList[];
  private loaded;
  constructor( private vocabRepository: VocabRepository) {
    this.loaded = false;
  }

  ngOnInit() {
    this.vocabRepository.getAll().subscribe(x => this.onVocabLoaded(x));
  }
  private onVocabLoaded(vocab: VocabList[]) {
    this.vocabList = vocab;
    this.loaded = true;
    console.log(this.vocabList);
  }
}
