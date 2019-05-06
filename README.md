# Markdown Links
Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README.md).

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

## Objetivo.

Diseño de Librería implementada en JavaScript para ejecutar con Node.js. El comportamiento del ejecutable debe verificar si contiene archivos Markdown e imprimir los links que encuentre igualmente la ruta del archivo donde aparece y el texto que hay dentro del link(máximo 50 caracteres).

## Diagrama de flujo con algoritmo para la solución al problema.
[Diagrama de Flujo](https://github.com/SeleneHdz01/GDL002-md-links/blob/master/img/diagramaDeFlujo.png)

## Pasos para la instalación.

<ul>
<li>Usa tu terminal e ingresa la siguiente instrucción</li>
<li>Requiere tener instalado Node.js en tu computadora</li>
</ul>

    npm i md-links-sel

## Funcionalidad
<ul>
<li>Busca archivos de tipo Markdown con extención .md</li>
<li>Lee los archivos .md</li>
<li>Extrae los links que encuentre dentro del archivo.</li>
<li>Verifica que los links sean validos.</li>
</ul>

### Por ejemplo:
$ md-links-sel
Found links:
1
href: https://es.wikipedia.org/wiki/Markdown,
    text: 'Markdown',
    file: 'prueba.md'

1
href: https://es.wikipedia.org/wiki/Markdown,
    text: 'Markdown',
    file: 'prueba.md'
https://es.wikipedia.org/wiki/Markdown  Página válida 


