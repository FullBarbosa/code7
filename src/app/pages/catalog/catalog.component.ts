import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../service/filmes.service';
import { Filmes } from '../../interface/filmes';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class CatalogComponent implements OnInit {
  constructor(
    private service: FilmesService,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.listarFilmes();
  }

  filmes!: Filmes[];

  listarFilmes() {
    this.service.listar().subscribe((filme: Filmes[]) => {
      this.filmes = filme;
    });
  }

  roteId(id: any) {
    this.service.delete(id).subscribe(() => {
      const msg = 'FILME EXCLUIDO';
      this.toastr.warning(msg, 'ERROR');
    });

    this.router.navigate(['/home']);
    this.fecharModal();
  }

  open(content: any) {
    this.modalService.open(content);
  }

  fecharModal() {
    this.modalService.dismissAll();
  }
}
