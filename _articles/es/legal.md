---
lang: es
title: Aspectos legales del código abierto.
description: Todo lo que te has preguntado sobre la parte legal de c&oacute;digo abierto.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Entendiendo las implicaciones legales del c&oacute;digo abierto

Compartir tu trabajo creativo con el mundo puede ser una experiencia excitante y gratificante. Esto tambi&eacute;n conlleva un conjunto de aspectos legales de los cuales debes ocuparte. Afortunadamente, no tienes que empezar desde cero. Nosotros tenemos cubiertas tus necesidades legales. (Antes de continuar, aseg&uacute;rate de leer nuestro [aviso legal](/notices/).)

## ¿Por qu&eacute; la gente se preocupa tanto acerca de los aspectos legales del c&oacute;digo abierto?

¡Me alegro que lo preguntes! Cuando realizas trabajo creativo (como escritura, dibujo, o c&oacute;digo), ese trabajo se encuentra bajo derechos de autor por defecto. Es decir, la ley asume que, como autor de tu trabajo, tienes poder de decisi&oacute;n sobre lo que los otros pueden o no hacer con ello.

En general, esto significa que nadie m&aacute;s  puede usar, copiar, distribuir, o modificar tu trabajo sin tener riesgo de sufrir bajas, ser investigado o demandado.

Sin embargo, el c&oacute;digo abierto es una circunstancia inusual debido a que el autor espera que otros usen, modifiquen, y compartan el trabajo. Pero, debido a que legalmente por defecto los derechos de autor son exclusivos, se necesita una licencia que enuncie expl&iacute;citamente estos permisos.

Si t&uacute; no aplicas una licencia de c&oacute;digo abierto, todo aquel que contribuya a tu proyecto tambi&eacute;n tiene derechos de autor de su trabajo. Esto significa que nadie puede usar, copiar, distribuir, o modificar sus contribuciones – y ese "nadie" te incluye a ti.

Finalmente, tu proyecto puede tener dependencias con requisitos de licencia que no conoces. La comunidad de tu proyecto, o tus pol&iacute;ticas de empleador, pueden requerir que tu proyecto haga uso de una licencia de c&oacute;digo abierto espec&iacute;fica. Cubriremos estas situaciones a continuaci&oacute;n.

## ¿Son p&uacute;blicos los proyectos de c&oacute;digo abierto de GitHub?

Cuando t&uacute; [creas un nuevo proyecto](https://help.GitHub.com/articles/creating-a-new-repository/) en GitHub, tienes la opci&oacute;n de hacerlo **privado** o **publico**.

![crear repositorio](/assets/images/legal/repo-create-name.png)

**Hacer tu proyecto de GitHub p&uacute;blico, no es lo mismo que licenciar tu proyecto.** Los proyectos p&uacute;blicos son cubiertos por [Los T&eacute;rminos de Servicio de GitHub](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), lo que les permite a otros ver y bifurcar el proyecto, pero su trabajo viene de otra manera sin permisos.

Si quieres que otros usen, copien, modifiquen, o contribuyan a tu proyecto, debes incluir una licencia de c&oacute;digo abierto. Por ejemplo, nadie puede usar legalmente cualquier parte de tu proyecto de GitHub en su c&oacute;digo, incluso si es p&uacute;blico, a menos que expl&iacute;citamente le concedas dicho derecho.

## Solo dame un resumen acerca de lo que necesito para proteger mi proyecto.

Tienes suerte, porque hoy, las licencias de c&oacute;digo abierto est&aacute;n estandarizadas y son f&aacute;ciles de usar. Puedes copiar copiar-pegar una licencia existente directamente en tu proyecto.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), y [GPLv3](https://choosealicense.com/licenses/gpl-3.0/)son las licencias de c&oacute;digo abierto m&aacute;s populares, pero tambi&eacute;n tienes otras opciones para elegir. Puedes encontrar un texto completo sobre estas licencias, e instrucciones de uso de las mismas en [choosealicense.com](https://choosealicense.com/).

Cuando crees un nuevo proyecto en GitHub, se te [pedir&aacute; que agregues una licencia](https://help.GitHub.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  Una licencia estandarizada sirve como aproximaci&oacute;n para quienes no tengan entrenamiento legal para saber con precisi&oacute;n lo que pueden y lo que no pueden hacer con el software.
A menos que sea absolutamente necesario, evita t&eacute;rminos personalizados, modificados o no estandarizados, lo cual te servir&aacute; como barrera para el uso posterior de la agencia de c&oacute;digo.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## ¿Cu&aacute;l licencia de c&oacute;digo abierto es apropiada para mi proyecto?

Si estas comenzando desde cero, es dif&iacute;cil equivocarse al elegir la [Licencia MIT](https://choosealicense.com/licenses/mit/). Es corta, muy f&aacute;cil de entender, y permite a cualquiera hacer lo que sea, siempre y cuando guarde una copia de la licencia, incluyendo tu aviso de derechos de autor. Tendr&aacute;s la posibilidad de lanzar el proyecto bajo otra licencia si alguna vez as&iacute; lo necesitas.

Elegir la licencia de c&oacute;digo abierto correcta para tu proyecto, depende de tus objetivos.

Muy probablemente, tu proyecto tiene (o tendr&aacute;) **dependencias**. Por ejemplo, si es un proyecto de c&oacute;digo abierto de Node.js, seguramente utilizaras librer&iacute;as del Node Package Manager (npm). Cada una de esas librer&iacute;as que utilizas, tendr&aacute;n su propia licencia de c&oacute;digo abierto. Si cada una de dichas licencias es "permisiva" (otorga permiso p&uacute;blico de uso, modificaci&oacute;n, y distribuci&oacute;n, sin ninguna condici&oacute;n de bajada), puedes usar cualquier licencia que quieras. Las licencias permisivas m&aacute;s comunes son MIT, Apache 2.0, ISC, y BSD.

Por otro lado, si cualquiera de las licencias de tus dependencias son copyleft "fuerte" (tambi&eacute;n brindan los mismos permisos, siempre y cuando se utilice la misma licencia consecuente), en este caso, tu proyecto deber&aacute; usar la misma licencia. Las licencias strong copyleft m&aacute;s comunes son GPLv2, GPLv3, and AGPLv3.

Deber&iacute;as considerar tambi&eacute;n a las **comunidades** qu&eacute; esperas que usaran y contribuir&aacute;n a tu proyecto:

* **¿Quieres que tu proyecto sea usado como dependencia por otros proyectos?** Probablemente, la mejor opci&oacute;n sea usar la licencia m&aacute;s popular en tu comunidad. Por ejemplo, [MIT](https://choosealicense.com/licenses/mit/) es la licencia m&aacute;s popular para [npm libraries](https://libraries.io/search?platforms=NPM).
* **¿Quieres que tu proyecto atraiga a grandes empresas?** Una gran empresa seguramente querr&aacute; una licencia de patente expresa por parte de todos los contribuyentes. En este caso, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) te tiene a ti (y a ellos) cubiertos.
* **¿Quieres que tu proyecto atraiga a colaboradores los cuales no quieren que sus contribuciones sean usado en software de c&oacute;digo cerrado?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) o (si tampoco quieren contribuir a servicios de c&oacute;digo cerrado) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) Seria el m&aacute;s apropiado.

Tu **empresa** puede que tenga requisitos espec&iacute;ficos para licencias de proyectos de c&oacute;digo abierto. Por ejemplo, tal vez requiera una licencia permisiva de modo que dicho proyecto pueda utilizarse en el producto de c&oacute;digo cerrado de dicha empresa. O tu empresa puede requerir una licencia strong copyleft y un acuerdo de colaboradores adicional (leer m&aacute;s abajo) para que solo tu empresa, y nadie m&aacute;s, pueda usar tu proyecto en software de c&oacute;digo cerrado. O tal vez, tu empresa tiene ciertas necesidades relacionadas con est&aacute;ndares, responsabilidad social, o transparencia, tales casos, requerir&aacute;n una estrategia de licencia particular. Habla con el [departamento legal de tu empresa](#qué-necesita-saber-el-equipo-legal-de-mi-empresa).

Cuando creas un Nuevo proyecto en GitHub, te son brindadas opciones para elegir una licencia. Incluir cualquiera de las licencias enunciadas anteriormente, har&aacute;n de tu proyecto de GitHub, un proyecto de c&oacute;digo abierto. Si quisieras considerar otras opciones, revisa [choosealicense.com](https://choosealicense.com) en donde encontraras licencias adecuadas para tu proyecto, incluso si el mismo [no es software](https://choosealicense.com/non-software/).

## Y si quieres cambiar la licencia de tu proyecto

La mayor&iacute;a de los proyectos no necesitan cambios de licencias. Pero ocasionalmente las circunstancias cambian.

Por ejemplo, a medida que tu proyecto crezca se a&ntilde;adir&aacute;n dependencias y usuarios, o tu empresa modifica estrategias, cualquiera de estos escenarios requerir&aacute;n diferentes licencias. Tambi&eacute;n, si te negaste a establecer una licencia a tu proyecto desde el comienzo, agregar una licencia es efectivamente lo mismo que cambiar las licencias. Hay tres aspectos fundamentales que debes considerar al a&ntilde;adir o cambiar la licencia de tu proyecto:

**Es complicado.** Determinar la compatibilidad y conformidad de la licencia con quienes son propietarios de sus derechos de autor puede volverse complicado y confuso muy r&aacute;pidamente. Cambiar a una nueva pero compatible licencia para nuevos lanzamientos y colaboradores es diferente a cambiar la licencia de todos los colaboradores ya existentes. Involucre a su equipo legal frente a cualquier deseo de cambiar licencias. Incluso si t&uacute; tienes o puedes obtener permiso de los titulares de derechos de autor de su proyecto para un cambio de licencia, considera el impacto de los cambios en los colaboradores y usuarios de tu proyecto. Imagina al cambio de licencia como un "evento de gobierno" para tu proyecto que probablemente marchara sin contratiempos mediante la comunicaci&oacute;n y consultas claras con las partes interesadas en el proyecto. ¡M&aacute;s razones para elegir y utilizar una licencia adecuada para su proyecto desde el comienzo!

**La licencia existente de su proyecto.** Si la licencia existente de su proyecto es compatible con la licencia a la que quieres cambiar, puedes simplemente empezar a usar la nueva licencia. Esto sucede debido a que si la licencia A es compatible con la licencia B, vas a estar cumpliendo con los t&eacute;rminos de A mientras cumples con los t&eacute;rminos de B (pero no necesariamente viceversa). As&iacute; que, si estas utilizando una licencia permisiva (Por ejemplo, MIT), puedes cambiar a una licencia con m&aacute;s condiciones, siempre y cuando mantengas una copia de la licencia MIT y cualquier aviso de derechos de autos asociado (esto implicar&iacute;a, continuar cumpliendo con las condiciones m&iacute;nimas de la licencia MIT). Pero si tu licencia actual no es permisiva (por ejemplo, copyleft, o si no tienes licencia) y no eres el &uacute;nico propietario de los derechos de autor, no podr&iacute;as simplemente cambiar la licencia del proyecto a MIT. Esencialmente, con una licencia permisiva del proyecto, en la cual los propietarios de derechos de autor han dado permiso por adelantado de cambiar licencias.

**Los propietarios de derechos de autor de tu proyecto.** Si eres el &uacute;nico contribuyente a tu proyecto, entonces tu o tu empresa es el &uacute;nico titular de los derechos de autor del proyecto. Puedes a&ntilde;adir o cambiar a cualquier licencia que tu o tu empresa deseen. En otros casos, podr&iacute;a haber propietarios de derechos de autor de los cuales necesitar&iacute;as realizar un acuerdo para poder cambiar las licencias. ¿Qui&eacute;nes? Personas que hayan realizado commits a tu proyecto es una buena forma de comenzar. Pero en algunos casos los derechos de autor estar&aacute;n en propiedad de los empleadores de dichas personas. En algunos casos las personas solo habr&aacute;n hecho _la menor parte_ de las contribuciones, pero no hay una regla r&aacute;pida y firme que establezca a partir de que cantidad de l&iacute;neas de c&oacute;digo est&aacute;n o no sujetos a derechos de autor dichos colaboradores. Para proyectos j&oacute;venes y peque&ntilde;os, puede ser factible lograr que todos los colaboradores acepten un cambio de licencia en una issue o un pull request. Para proyectos largos y de larga vida, tendr&aacute;s que buscar a muchos contribuyentes e incluso sus herederos. Mozilla tardo a&ntilde;os (2001-2006) para cambiar de licencia a Firefox, Thunderbird, y software relacionado.

De manera alternativa, puedes tener colaboradores que est&eacute;n de acuerdo por adelantado (mediante un acuerdo adicional de colaboradores – ver m&aacute;s abajo) con cambios de licencia bajo ciertas condiciones, m&aacute;s all&aacute; de los permitidos por tu licencia de c&oacute;digo abierto existente. Esto cambia la complejidad de cambiar la licencia. Necesitaras m&aacute;s ayuda por parte de tus abogados, y aun deber&aacute;s comunicarte claramente con las partes interesadas en su proyecto al ejecutar un cambio de licencia.

## ¿Necesita mi proyecto un acuerdo adicional de colaboradores?

Probablemente no. En la mayor&iacute;a de los proyectos de c&oacute;digo abierto, una licencia de c&oacute;digo abierto sirve impl&iacute;citamente de licencia tanto para el interior (colaboradores) como para el exterior (a otros colaboradores y usuarios). Si tu proyecto se encuentra en GitHub, los T&eacute;rminos de Servicio de GitHub al hacen "entrante=saliente" la [expl&iacute;cita por defecto](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Un acuerdo adicional de colaboradores – a menudo llamado Acuerdo de Licencia de colaboradores (en ingl&eacute;s, CLA) – puede crear trabajo administrativo para mantenedores de proyecto. La cantidad de trabajo que suma un acuerdo depende del proyecto y su implementaci&oacute;n. Un acuerdo simple puede requerir que los colaboradores confirmen, con un click, que tienen los derechos necesarios para contribuir bajo la licencia de condigo abierto del proyecto. Un acuerdo m&aacute;s complicado, requerir&aacute; revisi&oacute;n legal y la aprobaci&oacute;n de los empleadores del contribuyente.

Tambi&eacute;n, al a&ntilde;adir "papeleo" que algunos consideran innecesario, dif&iacute;cil de entender, o injusto (cuando el beneficiario del acuerdo obtiene m&aacute;s derechos que los colaboradores o el p&uacute;blico a trav&eacute;s de la licencia de c&oacute;digo abierto del proyecto), un acuerdo adicional de colaboradores puede ser percibido poco amigable a la comunidad del proyecto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    Hemos eliminado la CLA para Node.js. Esto, reduce la barrera de entrada para colaboradores de Node.js, ampliando asi la base de contribuyentes.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Algunas situaciones en las cuales deber&iacute;as considerar un acuerdo adicional de colaboradores pueden ser:

* Tus abogados quieren que todos los colaboradores acepten expresamente (_firma_, online o offline) los t&eacute;rminos de contribuci&oacute;n, quiz&aacute;s porque sienten que una licencia de c&oacute;digo abierto no es suficiente (incluso cuando lo sea!). Si este es la &uacute;nica preocupaci&oacute;n, un acuerdo adicional de colaboradores que afirme la licencia de c&oacute;digo abierto del proyecto, deber&iacute;a ser suficiente. El [Acuerdo Adicional de colaboradores Individual de jQuery](https://contribute.jquery.org/CLA/) es un buen ejemplo de un acuerdo adicional de colaboradores ligero. Para algunos proyectos, un [Certificado de Origen del Desarrollador](https://GitHub.com/probot/dco) puede ser una alternativa a&uacute;n m&aacute;s simple.

* Tu proyecto usa una licencia de c&oacute;digo abierto que no incluye una concesi&oacute;n de patentes explicita (como MIT), y necesitas una concesi&oacute;n de patentes por parte de todos los colaboradores, algunos de los cuales quiz&aacute;s trabajen para empresas con grandes cantidades de patentes que podr&iacute;an utilizarse para dirigirse a usted o a otros contribuyentes y usuarios del proyecto. El [Acuerdo Adicional de colaboradores Individual de Apache](https://www.apache.org/licenses/icla.pdf) es un acuerdo adicional de colaboradores que posee una concesi&oacute;n de patentes reflejando el que se encuentra en Apache License 2.0.

* Tu proyecto est&aacute; bajo una licencia copyleft, pero tambi&eacute;n necesitas distribuir una versi&oacute;n propietaria del proyecto. Necesitaras que cada colaborador te asigne sus derechos de autor o te garantice a ti (pero no al p&uacute;blico) una licencia permisiva. El [Acuerdo de colaboradores MongoDB](https://www.mongodb.com/legal/contributor-agreement) es un ejemplo de este tipo de acuerdo.

* Crees que el proyecto necesitara cambiar la licencia durante su tiempo de vida y quieres que los colaboradores acepten por adelantado esos cambios.

Si necesitas usar un acuerdo adicional de colaboradores para tu proyecto, considere el uso de una integraci&oacute;n como [CLA assistant](https://GitHub.com/cla-assistant/cla-assistant) para minimizar la distracci&oacute;n de los contribuyentes.

## ¿Qu&eacute; necesita saber el equipo legal de mi empresa?

Si vas a lanzar un proyecto de c&oacute;digo abierto como un empleado de una empresa, primero, tu equipo legal deber&iacute;a saber que est&aacute;s por lanzar un proyecto de c&oacute;digo abierto.

Para mejor, o peor, considera comentarles incluso en el caso en que sea un proyecto personal.

Probablemente tengas un "acuerdo IP de empleado" con tu empresa que les da cierto tipo de control sobre tus proyectos, especialmente si ellos est&aacute;n relacionados con el negocio de la empresa o si utilizan recursos de la empresa para desarrollar el proyecto. Tu empresa _deber&iacute;a_ brindarte f&aacute;cilmente permisos, y tal vez ya cuentes con ellos a trav&eacute;s de un acuerdo de IP amigable hacia los empleados o mediante pol&iacute;ticas empresariales. Si no es el caso, puedes negociar (por ejemplo, explicar que su proyecto posee objetivos profesionales de aprendizaje y desarrollo de la empresa para ti), o evitar trabajar en proyectos hasta que encuentres una mejor empresa.

**Si est&aacute;s trabajando en un proyecto de c&oacute;digo abierto para tu empresa** entonces definitivamente debes hacerles saber. Tu equipo legal seguramente ya cuenta con pol&iacute;ticas para esa licencia de c&oacute;digo abierto (y puede que tambi&eacute;n un acuerdo adicional de colaboradores) para usar basado en los requisitos y pericia del negocio de la empresa para asegurar que tu proyecto cumple con la licencia de sus dependencias. De lo contrario, tanto tu como ellos, est&aacute;n de suerte! tu equipo legal deber&iacute;a estar ansioso por trabajar con usted para acordar estas cosas. Algunos aspectos a considerar:

* **Material de terceros**   ¿tiene tu proyecto dependencias creadas por otros o bien incluye o usa c&oacute;digos ajenos? Esto comienza con la elecci&oacute;n de una licencia que funcione con las licencias de c&oacute;digo abierto de terceros (ver arriba). Si su proyecto modifica o distribuye c&oacute;digo abierto de terceros, su equipo legal tambi&eacute;n querr&aacute; saber si cumple con otras condiciones de las licencias de c&oacute;digo abierto de terceros, como la retenci&oacute;n de avisos de derechos de autor. Si tu proyecto utiliza c&oacute;digo de otros que no tienen una licencia de c&oacute;digo abierto, probablemente tendr&aacute;s que pedirle a los mantenedores que [agreguen una licencia de c&oacute;digo abierto](https://choosealicense.com/no-license/#for-users), y si no puedes conseguir una, deja de usar su c&oacute;digo en tu proyecto.

* **Secretos comerciales:**   Considera si hay algo en el proyecto que la empresa no quiere poner a disposici&oacute;n del p&uacute;blico en general. Si es as&iacute;, puedes hacer de c&oacute;digo abierto al resto del proyecto, despu&eacute;s de extraer el material que desea mantener privado.

* **Patentes:** ¿Esta tu empresa solicitando una patente, cuya liberaci&oacute;n del c&oacute;digo fuente del proyecto implique una [revelaci&oacute;n p&uacute;blica](https://en.wikipedia.org/wiki/Public_disclosure)? Tristemente, puede que te pidan que esperes (o tal vez, la empresa volver&aacute; a considerar la sabidur&iacute;a de la aplicaci&oacute;n). Si est&aacute;s esperando contribuciones a tu proyecto de los empleados de empresas con cantidades grandes de patentes, tu equipo legal puede que desee que utilices una licencia con una concesi&oacute;n de patente expresa de los contribuyentes (como Apache 2.0 o GPLv3), o un acuerdo adicional de colaboradores (ver m&aacute;s arriba).

* **Marca comercial** Verifica que el nombre de tu proyecto [no entre en conflicto con alguna marca existente](../starting-a-project/#evitando-conflictos-con-los-nombres). Si utilizas marcas comerciales de tu empresa en el proyecto, comprueba que no genere ning&uacute;n conflicto. [FOSSmarks](http://fossmarks.org/) es una gu&iacute;a pr&aacute;ctica para la comprensi&oacute;n de las marcas en el contexto de los proyectos de c&oacute;digo libre y abierto.

* **Privacidad** ¿Recolecta tu proyecto datos de sus usuarios? ¿Recopila su proyecto datos en los servidores de la empresa sin el consentimiento de los usuarios??  tu equipo legal puede ayudarte a cumplir con las pol&iacute;ticas de la empresa y las regulaciones externas.

Si est&aacute;s lanzando el primer proyecto de c&oacute;digo abierto de tu empresa, lo anterior es m&aacute;s que suficiente para conseguirlo.

A largo plazo, tu equipo legal puede hacer m&aacute;s para ayudar a la empresa a obtener su participaci&oacute;n en c&oacute;digo abierto y mantenerse a salvo:

* **Pol&iacute;ticas de contribuci&oacute;n de empleados:**  Considera la posibilidad de desarrollar una pol&iacute;tica corporativa que especifique c&oacute;mo sus empleados contribuyen a proyectos de c&oacute;digo abierto. Una pol&iacute;tica clara reducir&aacute; la confusi&oacute;n entre sus empleados y los ayudar&aacute; a contribuir a proyectos de c&oacute;digo abierto de la empresa, ya sea como parte de su trabajo o en su tiempo libre. Un buen ejemplo es Rackspace's [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Liberar el IP asociado con un parche genera la base de conocimientos y la reputaci&oacute;n del empleado. Demuestra que la empresa invierte en el desarrollo del empleado y crea un sentido de autonom&iacute;a y autonom&iacute;a. Todos estos beneficios tambi&eacute;n conducen a una mayor moral y mejor retenci&oacute;n de empleados.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
     </p>
</aside>

* **Qu&eacute; liberar:** [¿(casi) todo?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Si tu equipo legal entiende e invierte en la estrategia de c&oacute;digo abierto de su empresa, ser&aacute;n m&aacute;s capaces de ayudar en lugar de dificultar tus esfuerzos.

* **Conformidad:** Incluso si tu empresa no libera ning&uacute;n proyecto de c&oacute;digo abierto, utiliza otro software de c&oacute;digo abierto. La [conciencia y el proceso](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) puede prevenir dolores de cabeza, retrasos del producto, y demandas.

<aside markdown="1" class="pquote">
  Las organizaciones deben tener una estrategia de licencia y cumplimiento que se ajuste tanto a categor&iacute;as \["permisiva" y "copyleft"\]. Esto comienza con el mantenimiento de un registro de los t&eacute;rminos de licencia que se aplican al software de c&oacute;digo abierto que est&aacute; utilizando - incluidos subcomponentes y dependencias.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patentes:** Es posible que su empresa desee unirse a la [Red de Invenci&oacute;n Abierta](http://www.openinventionnetwork.com/), Un conjunto de patentes defensivas compartido para proteger el uso de los miembros de los principales proyectos de c&oacute;digo abierto, o explorar otras [licencias de patentes alternativas](https://www.eff.org/document/hacking-patent-system-2016).

* **Gobernancia:**   Especialmente si tiene sentido mover un proyecto a una [entidad jur&iacute;dica ajena a la empresa](../leadership-and-governance/#necesito-una-entidad-legal-para-apoyar-a-mi-proyecto).
