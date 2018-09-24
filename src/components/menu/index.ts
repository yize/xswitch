import { ViewController, observable } from '@ali/recore';

export default class Menu extends ViewController {
  @observable
  newItem = '';

  @observable items = [{
    label: 'haha',
    active: true,
  }];

  // @observable get activeItems() {
  //   return this.items.filter((item: any) => item.active);
  // }

  // onItemsChange(items: any) {
  //   console.log('itemChange', items);
  // }

  // @observable
  // get items() {
  //   return this._items;
  // }

  // set items(items: any) {
  //   this._items = items;
  //   this.onItemsChange(this._items);
  // }

  // $init(props: any) {
  //   console.log(2222, props);
  //   // this.items = props.items1;

  //   // if (typeof props.onItemsChange === 'function') {
  //   //   this.onItemsChange = props.onItemsChange;
  //   // }
  // }

  // $receive(props: any) {
  //   console.log(1111, props);
  //   // this.items = props.items1;
  // }

  // add() {
  //   if (this.newItem) {
  //     this.items.push({
  //       label: this.newItem,
  //       active: true,
  //     });
  //   }
  // }

  // remove({ scope }) {
  //   const i = this.items.indexOf(scope.item);
  //   if (i > -1) {
  //     this.items.splice(i, 1);
  //   }
  // }

  // toggleActive({ scope }) {
  //   scope.item.active = !scope.item.active;
  // }
}
