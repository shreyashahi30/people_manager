import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() showModal: boolean = false;  // Controls the visibility of the modal
  @Input() title: string = '';          // Title of the modal
  @Output() close = new EventEmitter<void>();  // Event emitter for closing the modal

  // Close the modal and emit the close event
  closeModal() {
    this.showModal = false;
    this.close.emit();
  }
}

