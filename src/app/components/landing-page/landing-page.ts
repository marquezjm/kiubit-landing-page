import { Component } from '@angular/core';

interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  imagenUrl: string;
}

interface Testimonio {
  id: number;
  nombre: string;
  comentario: string;
  imagenUrl: string;
  calificacion: number;
}

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

  cursosDestacados: Curso[] = [
    {
      id: new Date().getTime(),
      titulo: 'Álgebra Básica',
      descripcion: 'Aprende los fundamentos del álgebra, incluyendo ecuaciones, desigualdades y funciones.',
      imagenUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOu9ngRK6rwc0ZCo97lhpVqXnVN6zOcyInOdUEjHi75MrcwETpCtg0OO1-IXstV-FqnwAJ7oQa-fx6NUN50a5Gnwofyw4ChcHuG-yOdPX8q8VrvHL6Zn5CvVu-6YiKrGq-xlJ5o6VN8RvVPGBFYUHZe2FSrGB1QcbOddLnZwZ07p8YgD-YN9Qpylrh7MmGDVvi13UD1lArcX2yE5lstaa69VPmNV3eaWf79Vjd1tr-hptNDVBD5jGys9InLF16A8ruk7FIubJIpVc6'
    },
    {
      id: new Date().getTime() + 1,
      titulo: 'Trigonometría',
      descripcion: 'Estudia relaciones entre ángulos y lados en triángulos, funciones trigonométricas y sus aplicaciones.',
      imagenUrl: 'https://picsum.photos/seed/trigonometria/640/360'
    },
    {
      id: new Date().getTime() + 2,
      titulo: 'Cálculo Diferencial',
      descripcion: 'Introducción a límites, derivadas y técnicas básicas de diferenciación con problemas aplicados.',
      imagenUrl: 'https://picsum.photos/seed/calculo/640/360'
    },
    {
      id: new Date().getTime() + 3,
      titulo: 'Probabilidad y Estadística',
      descripcion: 'Conceptos fundamentales de probabilidad, distribución, media, varianza y análisis estadístico básico.',
      imagenUrl: 'https://picsum.photos/seed/estadistica/640/360'
    }
  ];

  testimonios: Testimonio[] = [
    {
      id: new Date().getTime(),
      nombre: 'Ana Gómez',
      comentario: 'Kiubit transformó mi forma de aprender matemáticas. Los cursos son claros y fáciles de seguir.',
      imagenUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      calificacion: 5
    },
    {
      id: new Date().getTime() + 1,
      nombre: 'Luis Pérez',
      comentario: 'La metodología de Kiubit me ayudó a entender conceptos complejos de manera sencilla. ¡Muy recomendable! ',
      imagenUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      calificacion: 4
    },
    {
      id: new Date().getTime() + 2,
      nombre: 'María López',
      comentario: 'Los ejercicios prácticos son muy útiles. ¡Recomiendo Kiubit al 100%!',
      imagenUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      calificacion: 5
    },
    {
      id: new Date().getTime() + 3,
      nombre: 'Carlos Sánchez',
      comentario: 'Excelente plataforma con contenido actualizado y relevante para estudiantes de todos los niveles.',
      imagenUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      calificacion: 5
    }
  ];

}
