---
lang: es
title: Buenas Pr&aacute;cticas para Mantenedores de C&oacute;digo.
description: Haci&eacute;ndote la vida m&aacute;s f&aacute;cil como un mantenedor de c&oacute;digo abierto, desde el proceso de documentaci&oacute;n hasta sacar el m&aacute;ximo provecho de la comunidad.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## ¿Qu&eacute; significa ser un mantenedor de c&oacute;digo?

Si tu trabajo es mantener un proyecto de c&oacute;digo abierto que mucha gente usa, probablemente te hayas percatado que pasas m&aacute;s tiempo respondiendo issues que programando.

En etapas tempranas de un proyecto, pasas tiempo experimentando con ideas nuevas y tomando decisiones en base a lo que te gusta. A medida que tu proyecto crece en popularidad, te encontrar&aacute;s en una situaci&oacute;n en la que trabajar&aacute;s con tus usuarios y colaboradores cada vez m&aacute;s.

Mantener un proyecto requiere m&aacute;s que solamente c&oacute;digo. Estas tareas no suelen ser tenidas en cuenta, pero son igual de importantes para un proyecto en crecimiento. Hemos reunido algunas ideas que har&aacute;n tu vida m&aacute;s f&aacute;cil, desde el proceso de documentaci&oacute;n hasta sacar el m&aacute;ximo provecho de la comunidad.

## Documentando tus procesos

Tomar nota de los procedimientos es una de las mejores pr&aacute;cticas que puedes llevar a cabo como mantenedor de c&oacute;digo.

Documentar no s&oacute;lo aclara tu pensamiento, sino que tambi&eacute;n ayuda a otros a entender lo que necesitas o est&aacute;s esperando, sin siquiera tener que preguntar.

Tomar nota de los procesos facilita el hecho de decir que no cuando la propuesta de alguien no encaja en tu contexto. As&iacute; como tambi&eacute;n hace m&aacute;s f&aacute;cil que otras personas puedan sumarse y ayudar. Nunca sabes quien podr&iacute;a estar leyendo o usando tu proyecto.

Aunque no seas del tipo de persona que escribe p&aacute;rrafos completos, tener los puntos claves anotados es mejor que no tener nada.

### Dejando en claro la visi&oacute;n de tu proyecto

Comienza escribiendo los objetivos de tu proyecto. Agr&eacute;galos a tu archivo README, o crea un archivo separado llamado VISION. Si existen otros artefactos que puedan ayudar, como un mapa del proyecto, h&aacute;zlos p&uacute;blicos tambi&eacute;n

Llevando una clara, documentada visi&oacute;n te mantiene en foco y ayuda a evitar el mal entendimiento del alcance por parte de otros colaboradores.

Por ejemplo, @lord descubri&oacute; que tener la visi&oacute;n de un proyecto lo ayud&oacute; a darse cuenta que peticiones priorizar. Como un mantenedor de c&oacute;digo novato, se lament&oacute; de no ser fiel al alcance del proyecto cuando recibi&oacute; su primer pedido de funcionalidad por [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Lo intent&eacute;. No le puse el esfuerzo necesario para salir adelante con una soluci&oacute;n completa. En lugar de una soluci&oacute;n a medias, hubiera deseado haber dicho "En este momento no tengo tiempo para eso, pero voy a agregar la funcionalidad a la lista de pendientes a desarrollar en el futuro."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips para mantenedores de c&oacute;digo abierto"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunicar tus expectativas

Algunas veces puede que sea complicado detallar las reglas para que otra gente pueda contribuir. Puedes llegar a sentir que est&aacute;s comport&aacute;ndote como un policia o arruinando la diversi&oacute;n para los dem&aacute;s.

Escritas y aplicadas de manera justa, sin embargo, las buenas reglas dan poder a los mantenedores de c&oacute;digo. Evitan que te arrastren a hacer cosas que no quieres hacer.

La mayor&iacute;a de las personas que se encuentran con tu proyecto no saben nada sobre ti o tus circunstancias. Pueden asumir que te pagan para trabajar en &eacute;l, especialmente si es algo que usan y dependen regularmente. Tal vez en un momento pon&iacute;as mucho tiempo en tu proyecto, pero ahora est&aacute;s ocupado con un nuevo trabajo o alg&uacute;n miembro de la familia.

¡Est&aacute; perfectamente bien! S&oacute;lo aseg&uacute;rate de que la gente lo sepa.

Si el mantenimiento de tu proyecto es a tiempo parcial o simplemente ser voluntario, se honesto acerca de cu&aacute;nto tiempo tienes. Esto no es lo mismo que cu&aacute;nto tiempo piensas que el proyecto requiere, o cu&aacute;nto tiempo otros quieren que gastes.

Aqu&iacute; hay algunas reglas que vale la pena anotar:

* C&oacute;mo se revisa y acepta una contribuci&oacute;n (_¿Necesitan hacer testing? ¿Alguna plantilla que deban utilizar para las issues?_)
* Los tipos de contribuciones que acepatar&aacute;s (_¿S&oacute;lo quieres ayuda con una parte del c&oacute;digo?_)
* Cuando es apropieado hacer seguimiento (_eg. "Puede esperar una respuesta de un mantenedor de c&oacute;digo dentro de los pr&oacute;ximos 7 d&iacute;as. Si no ha o&iacute;do nada para entonces, no dude en hacer ping al hilo."_)
* Cuanto tiempo dedicas al proyecto (_eg. "S&oacute;lo invertimos unas 5 horas semanales en este proyecto"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), y [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) son algunos ejemplos de proyectos con reglas claras para mantenedores y colaboradores.

### Mantener la comunicaci&oacute;n p&uacute;blica

No olvides documentar tus interacciones, tambi&eacute;n. Dondequiera que puedas, mant&eacute;n la comunicaci&oacute;n sobre tu proyecto p&uacute;blica. Si alguien intenta ponerse en contacto contigo en privado para discutir una solicitud de funcionalidad o una necesidad de soporte, h&aacute;galo dirigirse educadamente a un canal de comunicaci&oacute;n p&uacute;blico, como una lista de correo o un rastreador de issues.

Si te re&uacute;nes con otros mantenedores, o tomas alguna decisi&oacute;n importante en privado, documenta estas conversaciones de manera p&uacute;blica, incluso si s&oacute;lo est&aacute;s publicando tus notas.

De esa manera, cualquiera que se una a tu comunidad tendr&aacute; acceso a la misma informaci&oacute;n que alguien que ha estado all&iacute; durante a&ntilde;os.

## Aprendiendo a decir no

Has escrito las cosas. Lo ideal ser&iacute;a que todo el mundo lea tu documentaci&oacute;n, pero en realidad, tendr&aacute;s que recordar a los dem&aacute;s que este conocimiento existe.

Tener todo escrito, sin embargo, ayuda a despersonalizar las situaciones cuando necesitas hacer cumplir tus reglas.

Decir que no, no es divertido, pero  _"Tu contribuci&oacute;n no coincide con los criterios de este proyecto"_ se siente menos personal que _"No me gusta tu contribuci&oacute;n"_.

Decir que no, se aplica a muchas situaciones que encontrar&aacute;s como un mantenedor de c&oacute;digo: solicitudes de funcionalidades que no encajan en el alcance, alguien que descarrila una discusi&oacute;n, hacer alg&uacute;n trabajo innecesario para otros.

### Mantener la conversaci&oacute;n amistosa

Uno de los lugares m&aacute;s importantes en los que practicar&aacute;s el decir que no, es en tu cola de issues y pull request. Como responsable del proyecto, inevitablemente recibir&aacute;s sugerencias que no desear&aacute;s aceptar.

Tal vez la contribuci&oacute;n cambie el alcance de tu proyecto o no coincida con tu visi&oacute;n. Tal vez la idea es buena, pero la implementaci&oacute;n es mala.

Independientemente de la raz&oacute;n, es posible manejar con tacto las contribuciones que no cumplen con los est&aacute;ndares de tu proyecto.

Si recibes una contribuci&oacute;n que no deseas aceptar, tu primera reacci&oacute;n podr&iacute;a ser ignorarla o fingir que no la has visto. Hacerlo podr&iacute;a da&ntilde;ar los sentimientos de la otra persona e incluso desmotivar a otros posibles contribuyentes en tu comunidad.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  La clave para manejar el soporte para proyectos de c&oacute;digo abierto de gran escala es mantener las issues en movimiento. Intenta evitar tener issues quietas. Si eres un desarrollador de iOS sabes lo frustrante que puede ser enviar radares. Podr&iacute;as recibir alguna noticia dos a&ntilde;os despues, y se les pedir&aacute; que vuelvan a intentarlo con la &uacute;ltima versi&oacute;n de iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Escalando comunidades de c&oacute;digo abierto"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

No dejes abierta una contribuci&oacute;n no deseada porque te sientas culpable o quieras ser amable. Con el tiempo, tus issues sin respuesta y PRs har&aacute; que trabajar en tu proyecto se sienta mucho m&aacute;s estresante e intimidante.

Es mejor cerrar de inmediato las contribuciones que sabes que no quieres aceptar. Si tu proyecto ya sufre de un gran backlog o lista de funcionalidades a implementar, @steveklabnik tiene sugerencias para [c&oacute;mo elegir issues de manera eficiente](https://words.steveklabnik.com/how-to-be-an-open-source-gardener).

En segundo lugar, ignorar las contribuciones env&iacute;a una se&ntilde;al negativa a tu comunidad. Contribuir a un proyecto puede ser intimidante, especialmente si es la primera vez de alguien. Incluso si no aceptas su contribuci&oacute;n, reconocer a la persona detr&aacute;s de ella y agradecerles por su inter&eacute;s. ¡Es un gran cumplido!

Si no quieres aceptar una contribuci&oacute;n:

* **Agradeceles** por su contribuci&oacute;n.
* **Expl&iacute;cales por qu&eacute; no encaja** en el alcance del proyecto, y ofrece sugerencias claras para mejorar, si es posible. S&eacute; amable, pero firme.
* **Comparte informaci&oacute;n relevante**, si la tienes. Si notas peticiones repetidas de cosas que no deseas aceptar, agr&eacute;galas a tu documentaci&oacute;n para evitar explicar siempre lo mismo.
* **Cierra la solicitud**

no deber&iacute;as necesitar m&aacute;s de 1-2 oraciones para responder. por ejemplo, cuando un usuario de [celery](https://github.com/celery/celery/) report&oacute; un error relacionado a Windows, @berkerpeksag [respondi&oacute; con](https://github.com/celery/celery/issues/3383):

[celery screenshot](/assets/images/best-practices/celery.png)

Si te aterra la idea de decir que no, no te sientas s&oacute;lo. Como @jessfraz [dice](https://blog.jessfraz.com/post/the-art-of-closing/):

> He hablado con los mantenedores de c&oacute;digo de numerosos proyectos de c&oacute;digo abierto diferentes, Mesos, Kubernetes, Chromium, y todos est&aacute;n de acuerdo en que una de las partes m&aacute;s dif&iacute;ciles de ser un mantenedor de c&oacute;digo es decir "No" a los parches que no quieres.

No te sientas culpable por no querer aceptar la contribuci&oacute;n de alguien. La primera regla del c&oacute;digo abierto, [de acuerdo con](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"No, es temporal; si, es para siempre."_ Si bien la empat&iacute;a con el entusiasmo de otra persona es algo bueno, rechazar una contribuci&oacute;n no es lo mismo que rechazar a la persona detr&aacute;s de ella.

En &uacute;ltima instancia, si una contribuci&oacute;n no es lo suficientemente buena, no est&aacute;s obligado a aceptarla. S&eacute; amable y receptivo cuando las personas contribuyan a tu proyecto, pero s&oacute;lo acepta cambios que realmente crees que har&aacute;n que tu proyecto sea mejor. Cuanto m&aacute;s a menudo practiques diciendo no, m&aacute;s f&aacute;cil se vuelve. Es una promesa.

### S&eacute; proactivo

Para reducir el volumen de las contribuciones no deseadas en primer lugar, explica el proceso de tu proyecto para presentar y aceptar contribuciones en tu gu&iacute;a de contribuci&oacute;n.

Si recibes demasiadas contribuciones de baja calidad, exija que los colaboradores hagan un poco de trabajo de antemano, por ejemplo:

* Llenar una plantilla o checklist para issues o PRs
* Abrir una issue antes de presentar un PR

Si no siguen tus reglas, cierra la issue inmediatamente y dir&iacute;gelos a tu documentaci&oacute;n.

Si bien este enfoque puede parecer desagradable al principio, ser proactivo es realmente bueno para ambas partes. Reduce la posibilidad de que alguien ponga muchas horas de trabajo desperdiciado en un pull request que no vas a aceptar. Y hace que tu carga de trabajo sea m&aacute;s f&aacute;cil de manejar.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Idealmente, expl&iacute;cales y en un archivo CONTRIBUTING.md c&oacute;mo pueden obtener una mejor indicaci&oacute;n en el futuro de lo que ser&iacute;a o no aceptado antes de comenzar el trabajo.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Cerrando Pull Requests amablemente"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

A veces, cuando dices que no, tu contribuyente potencial puede molestarse o criticar tu decisi&oacute;n. Si su comportamiento se vuelve hostil, [tomar medidas para desactivar la situaci&oacute;n](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) o incluso eliminarlos de tu comunidad, si no est&aacute;n dispuestos a colaborar constructivamente.

### Abrazar el mentoreo

Tal vez alguien en tu comunidad env&iacute;e regularmente contribuciones que no cumplen con los est&aacute;ndares de tu proyecto. Puede ser frustrante para ambas partes pasar repetidamente por el proceso de rechazo.

Si ves que alguien est&aacute; entusiasmado con tu proyecto, pero necesita un poco de pr&aacute;ctica, ten paciencia. Explica claramente en cada situaci&oacute;n por qu&eacute; sus contribuciones no cumplen con las expectativas del proyecto. Trata de asignarles una tarea m&aacute;s f&aacute;cil o menos ambigua, como una issue marcada como _"good first issue,"_ , para entrar en calor. Si tienes tiempo, considera mentorearlos a trav&eacute;s de su primera contribuci&oacute;n, o encuentra a alguien m&aacute;s en tu comunidad que est&eacute; dispuesto a ser mentor de ellos.

## Aprovechando la comunidad

No tienes que hacer todo tu mismo. ¡La comunidad de tu proyecto existe por una raz&oacute;n! Incluso si a&uacute;n no tienes una comunidad de contribuidores activa, si tienes muchos usuarios, que trabajen.

### Compartir la carga de trabajo

Si est&aacute;s buscando a otros para que se sumen, comienza por preguntar alrededor.

Cuando veas nuevos contribuyentes haciendo contribuciones repetidas, deber&iacute;as reconocer su trabajo ofreci&eacute;ndoles m&aacute;s responsabilidades. Documenta c&oacute;mo otros pueden alcanzar roles de liderazgo si lo desean.

Alentar a otros a [compartir la propiedad del proyecto](../building-community/#comparte-la-propiedad-de-tu-proyecto) puede reducir en gran medida tu carga de trabajo, como @lmccart descubri&oacute; en su proyecto, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  Estuve diciendo, "Si, cualquier persona puede formar parte, no necesitas tener mucha experiencia en programaci&oacute;n [...]." Hemos tenido personas incriptas [a eventos] y ah&iacute; fue cuando me pregunt&eacute;: es esto cierto, lo que estuve diciendo? Habr&aacute;n 40 personas que se presentar&aacute;n, y no es como si pudiera sentarme con cada uno de ellos...Pero la gente se reuni&oacute;, y funcion&oacute;. tan pronto como una persona lo consiguiera, podr&iacute;a ense&ntilde;arle a sus vecinos.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["¿Qu&eacute; significa, al fin y al cabo, "C&oacute;digo Abierto"? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Si necesitas alejarte de tu proyecto, ya sea por un tiempo o permanentemente, no hay vergüenza en pedirle a alguien m&aacute;s que se haga cargo por t&iacute;.

Si otras personas son entusiastas acerca de la direcci&oacute;n del proyecto, dales permiso para relizar commits o formalmente entr&eacute;gale el control a alguien m&aacute;s. Si alguien realiz&oacute; un fork de tu proyecto y lo est&aacute; manteniendo activamente en otro lugar, considera enlazar el fork desde tu proyecto original. ¡Es genial que tantas personas quieran que tu proyecto crezca!

@progrium [encontr&oacute; que](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documentar la visi&oacute;n de su proyecto, [Dokku](https://github.com/dokku/dokku), ayud&oacute; a esos objetivos a perdurar, incluso despu&eacute;s de que se alej&oacute; del proyecto:

> Escrib&iacute; una p&aacute;gina wiki describiendo lo que quer&iacute;a y por qu&eacute; lo quer&iacute;a. ¡Por alguna raz&oacute;n me sorprendi&oacute; que los mantenedores comenzaran a mover el proyecto en esa direcci&oacute;n! ¿Sucedi&oacute; exactamente c&oacute;mo lo har&iacute;a? No siempre. Pero a&uacute;n as&iacute; acerc&oacute; el proyecto a lo que quer&iacute;a.

### Permite a otros construir las soluciones que necesitan

Si un contribuyente potencial tiene una opini&oacute;n diferente sobre lo que tu proyecto deber&iacute;a hacer, es posible que debas animarlo suavemente a trabajar en su propio fork.

Hacer fork de un proyecto no tiene por qu&eacute; ser una cosa mala. Ser capaz de copiar y modificar proyectos es una de las mejores cosas sobre es c&oacute;digo abierto. Alentar a los miembros de su comunidad a trabajar en su propio fork puede proporcionar la salida creativa que necesitan, sin entrar en conflicto con la visi&oacute;n de tu proyecto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  Yo atiendo el 80% de los casos de uso. Si eres uno de los unicornios, por favor, haz un fork de mi trabajo. ¡No me ofender&eacute;! Mis proyectos p&uacute;blicos casi siempre est&aacute;n destinados a resolver los problemas m&aacute;s comunes; Trato de hacer que sea f&aacute;cil ir m&aacute;s lejos ya sea con un fork de mi trabajo o extendi&eacute;ndolo.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Por qu&eacute; cierro PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Lo mismo se aplica a un usuario que realmente quiere una soluci&oacute;n que simplemente no tienes el alcance para construir. Ofrecer APIs y hooks personalizables puede ayudar a otros a satisfacer sus propias necesidades, sin tener que modificar la fuente directamente.
@orta [encontr&oacute; que](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) alentando plugins para CocoaPods llev&oacute; a "algunas de las ideas m&aacute;s interesantes":

> Es casi inevitable que una vez que un proyecto se hace grande, los mantenedores tienen que ser mucho m&aacute;s conservadores sobre c&oacute;mo introducir nuevo c&oacute;digo. Te vuelves bueno en decir "no", pero muchas personas tienen necesidades leg&iacute;timas. Por lo tanto, en su lugar terminas convirtiendo tu herramienta en una plataforma.

## Traigan a los robots

As&iacute; como hay tareas en las que otras personas pueden ayudarte, tambi&eacute;n hay tareas que ning&uacute;n ser humano deber&iacute;a tener que hacer. Los robots son tus amigo. &uacute;salos para hacer tu vida como mantenedor de c&oacute;digo m&aacute;s f&aacute;cil.

### Exigir pruebas y otras comprobaciones para mejorar la calidad de tu c&oacute;digo

Una de las maneras m&aacute;s importantes de automatizar tu proyecto es realizando testing.

El testing ayuda a los contribuyentes a sentirse seguros de que no romper&aacute;n nada. Tambi&eacute;n facilitan la revisi&oacute;n y aceptaci&oacute;n de contribuciones r&aacute;pidamente. Cuanto m&aacute;s receptivo seas, m&aacute;s comprometida podr&aacute; ser tu comunidad.

Configura los tests autom&aacute;ticos que se ejecutar&aacute;n en todas las contribuciones entrantes y aseg&uacute;rate de que puedan ser ejecutados localmente por los contribuyentes. Requiere que todas las contribuciones de c&oacute;digo pasen por los tests antes de que puedan ser enviadas. Ayudar&aacute; a establecer un est&aacute;ndar m&iacute;nimo de calidad para todas las solicitudes.
[Chequeos de estado requerido](https://help.github.com/articles/about-required-status-checks/) en GitHub pueden ayudar a asegurar que ning&uacute;n cambio se fusione sin pasar primero por los tests.

Si agregas testing, aseg&uacute;rate de explicar c&oacute;mo funcionan en su archivo CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  Creo que las pruebas son necesarias para todo c&oacute;digo en el que la gente trabaja. Si el c&oacute;digo era totalmente y perfectamente correcto, no necesitar&iacute;a cambios - s&oacute;lo escribimos c&oacute;digo cuando algo est&aacute; mal, ya sea "Se bloquea" o "Falta tal o cual caracter&iacute;stica". Independientemente de los cambios que est&eacute;s haciendo, las pruebas son esenciales para capturar cualquier regresi&oacute;n que pueda introducir accidentalmente.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Automatizaci&oacute;n de la comunidad de Rust"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Utilizar herramientas para automatizar tareas b&aacute;sicas de mantenimiento

La buena noticia sobre el mantenimiento de un proyecto popular es que otros mantenedores probablemente han enfrentado problemas similares y han construido una soluci&oacute;n para ello.

Existen una [variedad de herramientas disponibles](https://github.com/showcases/tools-for-open-source) para ayudar a automatizar algunos aspectos del trabajo de mantenimiento. Algunos ejemplos:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatiza tus versiones
* [mention-bot](https://github.com/facebook/mention-bot) menciona posibles revisores para las rull requests
* [Danger](https://github.com/danger/danger) ayuda a automatizar la revisi&oacute;n de c&oacute;digo

Para informes de errores y otras contribuciones comunes, GitHub posee [Plantillas para Issues y Pull Requests](https://github.com/blog/2111-issue-and-pull-request-templates), que puedes crear para agilizar la comunicaci&oacute;n que recibes. tambi&eacute;n pueden configurar [filtros de correo electr&oacute;nico](https://github.com/blog/2203-email-updates-about-your-own-activity) para adimistrar las notificaciones de tu correo.

Si deseas volverte un poco m&aacute;s avanzado, las gu&iacute;as de estilo pueden estandarizar las contribuciones del proyecto y hacerlas m&aacute;s f&aacute;ciles de revisar y aceptar.

Sin embargo, si tus est&aacute;ndares son demasiado complicados, pueden aumentar las barreras a la contribuci&oacute;n. Aseg&uacute;rate de que s&oacute;lo est&aacute;s agregando reglas para facilitar la vida de todos.

Si no est&aacute;s seguro de qu&eacute; herramientas usar, observe lo que hacen otros proyectos populares, especialmente los de tu ecosistema. Por ejemplo, ¿qu&eacute; aspecto tiene el proceso de contribuci&oacute;n para otros m&oacute;dulos de Node? El uso de herramientas y enfoques similares tambi&eacute;n har&aacute; que tu proceso sea m&aacute;s familiar para sus contribuyentes objetivo.

## Est&aacute; bien poner pausa

El trabajo de c&oacute;digo abierto una vez te trajo alegr&iacute;a. Tal vez ahora est&aacute; empezando a hacer que te sientas evasivo o culpable.

Tal vez te sientes abrumado o con un creciente sentimiento de temor cuando piensas en tus proyectos. Y mientras tanto, las issues y pull requests se acumulan.

El agotamiento es un problema real y omnipresente en el trabajo de c&oacute;digo abierto, especialmente entre los mantenedores. Como mantenedor, tu felicidad es un requisito no negociable para la supervivencia de cualquier proyecto de c&oacute;digo abierto.

Aunque deber&iacute;a darse por sabido, ¡Toma un descanso! No debes esperar hasta que te sientas quemado a tomar unas vacaciones. @brettcannon, un desarrollador de Python, decidi&oacute; tomar [unas vacaciones de un mes de duraci&oacute;n] (http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) despu&eacute;s de 14 a&ntilde;os de voluntariado OSS.

Al igual que cualquier otro tipo de trabajo, tomar pausas regulares te mantendr&aacute; fresco, feliz y emocionado acerca de tu trabajo.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  Durante el mantenimiento de WP-CLI, descubr&iacute; que tengo que preocuparme por mi felicidad primero, y establecer l&iacute;mites claros en mi participaci&oacute;n. El mejor equilibrio que he encontrado es 2-5 horas por semana, como parte de mi horario de trabajo normal. Esto mantiene mi participaci&oacute;n una pasi&oacute;n, y de sentirse demasiado como el trabajo. Como priorizo ​​las issues en las que estoy trabajando, puedo hacer progresos regulares en lo que creo que es lo m&aacute;s importante.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["Mis condolencias, ahora eres el mantenedor de un proyecto de c&oacute;digo abierto popular"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

A veces, puede ser dif&iacute;cil tomar un descanso del trabajo de c&oacute;digo abierto cuando sientes como si todo el mundo te necesitara. La gente puede incluso tratar de hacerte sentir culpable por alejarte.

Haz tu mejor esfuerzo para encontrar soporte para sus usuarios y comunidad mientras est&eacute;s lejos de un proyecto. Si no puedes encontrar el apoyo que necesitas, toma un descanso de todos modos. Aseg&uacute;rese de comunicar cuando no est&eacute;s disponible, para que la gente no se sienta confundida por tu falta de capacidad de respuesta.

Tomar descansos se aplica a m&aacute;s que s&oacute;lo vacaciones, tambi&eacute;n. Si no deseas hacer trabajo de c&oacute;digo abierto los fines de semana, o durante las horas de trabajo, comunica esas decisiones a los dem&aacute;s, para que sepan que no deben molestarte.

## ¡Cu&iacute;date primero!

Mantener un proyecto popular requiere habilidades diferentes que las primeras etapas de crecimiento, pero no es menos gratificante. Como mantenedor, practicar&aacute;s liderazgo y habilidades personales en un nivel que pocas personas pueden experimentar. Aunque no siempre es f&aacute;cil de manejar, el establecimiento de l&iacute;mites claros y s&oacute;lo tomar lo que te hace sentir c&oacute;modo te ayudar&aacute; a mantenerte feliz, actualizado y productivo.
