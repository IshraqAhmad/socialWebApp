import Component from '@glimmer/component';

export default class PaginationComponent extends Component {
  get isNextDisabled() {
    return this.args.pageNumber === this.totalPages ? true : false;
  }

  get prevPageNumber() {
    return Math.max(1, this.args.pageNumber - 1);
  }

  get nextPageNumber() {
    return Math.min(this.totalPages, this.args.pageNumber + 1);
  }

  get totalPages() {
    let recordCount = this.args.recordCount;
    let pageSize = this.args.pageSize;
    let pageNumber = this.args.pageNumber;
    let maxPagesInList = this.args.maxPagesInList;

    if (
      recordCount < 0 ||
      pageSize < 1 ||
      pageNumber < 1 ||
      maxPagesInList < 2
    ) {
      return 0;
    }

    let totalPages = Math.floor(recordCount / pageSize),
      rem = recordCount % pageSize;
    if (rem > 0) {
      totalPages++;
    }

    return totalPages;
  }

  get nbrPagesInList() {
    return Math.min(this.totalPages, this.args.maxPagesInList);
  }

  get pages() {
    let pageArray = [],
      totalPages = this.totalPages,
      pageNumber = this.args.pageNumber,
      nbrPagesInList = this.nbrPagesInList,
      active,
      pgNbr,
      endPgNbr;

    endPgNbr = Math.min(pageNumber + 3, totalPages);
    pgNbr = Math.max(endPgNbr - nbrPagesInList + 1, 1);

    for (var i = 0; i < nbrPagesInList; i++) {
      active = pgNbr === pageNumber ? true : false;
      pageArray[i] = { number: pgNbr, active: active };
      pgNbr++;
    }
    return pageArray;
  }
}
