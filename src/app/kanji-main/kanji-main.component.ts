import { Component, OnInit } from '@angular/core';
import { Kanji, KanjiList, KanjiRepository } from '../domain';
@Component({
  selector: 'app-kanji-main',
  templateUrl: './kanji-main.component.html',
  styleUrls: ['./kanji-main.component.css']
})
export class KanjiMainComponent implements OnInit {
  private loaded;
  private kanjiList;
  constructor(private kanjiRepository: KanjiRepository) {
    this.loaded = false;
  }

  ngOnInit() {
    this.kanjiRepository.getAll().subscribe(x => this.onKanjiLoaded(x));
  }
  private onKanjiLoaded(kanji: KanjiList[]) {
    this.kanjiList = kanji;
    this.loaded = true;
    console.log(this.kanjiList);
  }
}
