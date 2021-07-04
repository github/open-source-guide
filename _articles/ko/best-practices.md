---
lang: ko
title: 관리자의 모범
description: 문서화 과정에서 커뮤니티 활용에 이르기까지 오픈소스 관리자로서 여러분의 삶을 더 편하게 만들어 줍니다.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## 관리자라는 직책이란

여러분이 많은 사람들이 사용하는 오픈소스 프로젝트를 관리하고 있다면, 점점 코딩은 덜 하고 이슈에 더 많이 반응하고 있다는 것을 알아차렸을 것입니다.

프로젝트의 초기 단계에서, 여러분은 새로운 아이디어를 실험하고 여러분이 원하는 것을 바탕으로 결정을 내리고 있습니다. 프로젝트가 인기를 끌면서 여러분은 사용자 및 기여자들과 더 많은 일을 하게 될 것입니다.

프로젝트 유지에는 코드 이상의 것이 필요합니다. 종종 예상치 못한 과제가 주어지기도 하지만 성장하는 프로젝트에게 이는 중요한 일입니다. 프로세스를 문서화하는 것에서부터 커뮤니티를 활용하는 것까지 여러분의 삶을 더 쉽게 만들 수 있는 몇 가지 방법을 모아 보았습니다.

## 프로세스 문서화하기

기록해두는 것은 여러분이 관리자로서 할 수 있는 가장 중요한 일 중 하나입니다.

문서화는 여러분의 생각을 분명히 할 뿐만 아니라 여러분이 필요로 하거나 기대하는 것을 사람들이 직접 물어보지 않고도 알 수 있게 합니다.

문서화를 해 두면 여러분의 의도에 맞지 않는 의견을 기각하기 더 쉬워집니다. 또한 사람들이 프로젝트에 참여하기 더 쉽게 만듭니다. 어떤 사람들이 여러분의 프로젝트를 보거나 사용하고 있는지 모르니까요.

모든 항목에 대해 작성하지 않아도 괜찮습니다. 주요 항목에 대해 적어두는 것이 아무 것도 적어놓지 않는 것보다는 낫습니다.

여려분의 문서를 항상 최신으로 유지할 수 있도록 노력하세요. 항상 업데이트하기 어렵다면 오래된 문서를 지우거나 'outdated'로 표시해서 기여자들의 업데이트를 환영한다고 알리세요.

### 프로젝트의 비전을 서술하세요

프로젝트의 목표를 이야기하는 것부터 시작하세요. 이를 README 파일 또는 새로운 VISION 파일에 추가하세요. 프로젝트 로드맵 등 도움이 될만한 자료가 더 있다면 그것도 게시하세요.

명료하고 문서화된 비전은 여러분을 집중할 수 있게 하고, 사람들의 기여로부터 생길 수 있는 'scope creep'을 피할 수 있도록 해줍니다.

예를 들어 @lord는 프로젝트 비전을 가지면 어떤 요구에 시간을 투자해야 하는지 파악하는 데 도움이 된다는 사실을 깨달았습니다. 새로운 관리자로서의 그는 [Slate](https://github.com/lord/slate)의 첫 기능 요청을 받았을 때 프로젝트의 본 목적에 집중하지 않았던 것을 아쉽게 생각했습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers”](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### 기대하는 바를 전달하세요

규칙을 나열하는 것은 머리 아픈 일입니다. 가끔 여러분이 사람들의 행동에 간섭하거나 재미를 없애는 것이 아닌가 하는 생각이 들 수도 있습니다.

그러나 공정하게 제정되고 시행되는 좋은 규칙은 관리자에게 제어력을 부여합니다. 하고 싶지 않은 일에 억지로 끌려들어가지 않게 해줍니다.

여러분의 프로젝트를 찾아오는 대부분의 사람들은 여러분이나 여러분의 환경에 대해 아무것도 알지 못합니다. 프로젝트에 의지하며 꾸준히 사용하는 사람들은 여러분이 그 프로젝트에서 작업하면서 보수를 받는다고 추측할지도 모릅니다. 언젠가는 프로젝트에 많은 시간을 쏟아부을 수 있었어도 이제는 새 직장이나 가족 구성원으로 정신없을 수도 있습니다.

전부 괜찮습니다! 대신 사람들에게 그렇다는 사실을 알리세요.

프로젝트 관리를 아르바이트식 혹은 자발적으로 하고 있다면 여러분이 가진 시간에 대해 솔직해지세요. 프로젝트에 투자해야 한다고 여러분이 생각하는 시간과, 사람들이 여러분이 프로젝트에 투자하기를 원하는 시간과는 다릅니다.

아래와 같은 규칙은 정해 두는 편이 좋습니다.

* 기여를 검토하고 받아들이는 방식 (_테스트를 수행해야 하나요? 정해진 이슈 템플릿이 있나요?_)
* 여러분이 받아들이고자 하는 기여 유형 (_코드의 일부분에만 기여를 받고 싶은가요?_)
* 피드백까지 예상되는 시간 (_ex. "일주일 안에는 관리자의 답변을 받으실 수 있을 것입니다. 그때까지 소식이 없다면 주저 말고 스레드에서 관리자를 호출해주세요" 등._)
* 여러분이 프로젝트에 투자하는 시간 (_ex. "저희는 이 프로젝트에 일주일에 약 5시간만을 할애하고 있습니다" 등._)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md)는 관리자와 기여자를 위한 행동 원칙을 가진 프로젝트의 예시입니다.

### 열린 장소에서 소통하세요

다양한 토의나 질답을 문서화하는 것을 잊지 마세요. 가능하면 어디에서든 여러분의 프로젝트에 대한 이야기는 공개적으로 하는 것이 좋습니다. 누군가 기능이나 지원 요청을 하기 위해 사적으로 연락한다면, 정중하게 메일링 리스트 혹은 이슈 트래커 등의 공개된 채널로 안내하세요.

다른 관리자와 만나거나, 공개하기 어려운 중요한 결정을 내린다면 여러분의 메모 정도라고 해도 내용은 공개적으로 게시하세요.

그러면 여러분의 프로젝트에 막 찾아온 사람도 몇 년간 있었던 사람과 같은 양의 정보를 획득할 수 있습니다.

## 거절하는 법 배우기

필요한 것들을 문서화했나요? 모두가 문서를 읽는다면 이상적이겠지만 현실은 그렇지 않습니다. 사람들에게 그런 문서가 있다는 사실을 알려주어야 합니다.

그러나 모든 것을 기록하면 규칙을 적용해야 할 때 객관적으로 상황을 해결할 수 있습니다.

거절하는 것은 썩 유쾌한 일이 아닙니다. 하지만 _"당신의 기여는 프로젝트 기준에 맞지 않아요."_가 _"당신의 기여가 마음에 들지 않네요."_보다는 덜 감정적으로 느껴집니다.

관리자로서, 본 목적에 맞지 않는 기능 요청, 토론과 관련 없는 발언, 불필요한 작업 등 거절이나 제지가 필요한 많은 상황을 맞닥뜨릴 것입니다.

### 친절한 태도를 유지하세요

여러분이 거절하는 경우가 실제로 생기는 중요한 장소 중에는 이슈 목록과 풀 리퀘스트 목록이 있습니다. 프로젝트 관리자로서 피치 못하게 원하지 않는 제안을 받을 때가 있습니다.

기여가 프로젝트의 목적을 뒤바꾸거나 비전과 맞지 않을 수도 있고, 아이디어는 좋지만 비효율적으로 구현되어 있을 수 있습니다.

이유와는 상관없이, 여러분은 프로젝트의 기준을 충족하지 않는 기여에 적절하게 대처하면 됩니다.

적용하고 싶지 않은 기여를 받았을 때, 여러분의 첫 반응은 그 기여를 무시하거나 못 본 척하는 것일지도 모릅니다. 그렇게 하면 기여자의 기분을 상하게 하는 것은 물론, 커뮤니티의 다른 잠재적 기여자들이 동기를 잃게 만들 수도 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities”](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

죄책감을 느끼고 싶지 않거나 친절함을 유지하고 싶다고 해서 원치 않는 기여를 내버려 두지 마세요. 시간이 흐르면서 그렇게 남겨진 이슈와 풀 리퀘스트가 여러분이 그 프로젝트에서 하는 작업을 더 성가시고 답답하게 만들 것입니다.

받아들이고 싶지 않은 기여는 즉각적으로 닫는 것이 좋습니다. 이미 여러분의 프로젝트가 쌓인 잔무로 고생하고 있다면, @steveklabnik가 [이슈를 효율적으로 분류하는 요령](https://words.steveklabnik.com/how-to-be-an-open-source-gardener)을 정리해 두었으니 참고하세요.

기여를 무시하는 것은 커뮤니티에 부정적인 신호를 보내는 것과 마찬가지입니다. 프로젝트에의 기여는 쉬운 일이 아닙니다. 특히 처음 기여하는 사람이라면 더 그렇습니다. 그들의 기여를 받아들이고 싶지 않다면, 적어도 그들이 보인 흥미와 노력에 대해 감사를 표하세요. 그것만으로도 큰 칭찬입니다!

기여를 받아들이고 싶지 않다면 다음과 같은 방법을 사용하세요.

* 기여에 대해 **감사를 표하세요**.
* **왜 기여가 프로젝트의 목적에 맞지 않는지 설명**하고, 가능하다면 개선점을 제시하세요. 친절하면서도 단호하게 말해야 합니다.
* **관련된 문서가 있다면 링크를 첨부**하세요. 비슷한 유형의 잘못된 기여가 계속된다면 문서에 관련 내용을 추가해서 반복 설명하게 되는 일이 없도록 하세요.
* **스레드를 닫으세요**.

답변에는 한두 문장이면 충분합니다. 예를 들어 @berkerpeksag는 [celery](https://github.com/celery/celery/) 유저가 윈도우와 관련된 에러를 제보했을 때 [이렇게 답변했습니다](https://github.com/celery/celery/issues/3383).

![Celery screenshot](/assets/images/best-practices/celery.png)

그래도 거절하기가 두렵다고요? [@jessfraz의 말](https://blog.jessfraz.com/post/the-art-of-closing/)처럼 여러분은 혼자가 아닙니다.

> Mesos, Kubernetes, Chromium 같은 여러 오픈소스 프로젝트 관리자들과 이야기해봤는데요. 다들 관리자로서 맡아야 하는 가장 어려운 일이 '원하지 않는 패치를 거절하는 것'이라는 점에 동의했죠.

누군가의 기여를 거절하는 것에 죄책감을 느끼지 마세요. [@shykes의 말](https://twitter.com/solomonstre/status/715277134978113536)에 따르면 오픈소스의 첫 번째 규칙은 _"NO는 일시적이지만 YES는 영원하다"_입니다. 다른 사람이 열중하는 일에 공감하는 것은 좋은 일이지만, 기여를 거절하는 것이 기여를 한 사람을 거절하는 것은 아닙니다.

궁극적으로, 기여가 충분히 좋지 않다면 여러분은 그 기여를 받아들일 의무가 없습니다. 여러분의 프로젝트에 기여하는 사람들을 친절하게 대하고 적극적으로 반응해야겠지만, 여러분의 프로젝트를 발전시킬 것이라고 생각되는 변화만을 받아들이세요. 일단 거절하다 보면 점점 쉬워질 것입니다. 약속할게요.

### 사전대책을 세우세요

처음부터 원치 않는 기여의 양을 줄이고 싶다면 기여 가이드에 여러분의 프로젝트가 기여를 제출 받고 적용하는 과정이 어떻게 이루어지는지 설명하세요.

질이 낮은 기여를 너무 많이 받고 있다면 기여자들에게 약간의 사전 작업을 요청하세요. 예를 들면 다음과 같습니다.

* 이슈 혹은 풀 리퀘스트 템플릿/체크리스트 작성
* 풀 리퀘스트 제출 전 이슈 열기

규칙을 따르지 않는다면 바로 이슈를 닫고 관련 문서로 안내하세요.

이런 접근 방식이 처음에는 불친절하게 느껴질 수도 있지만, 사전에 대비하는 태도는 양쪽 모두에게 좋습니다. 이는 여러분이 어차피 받아들이지 않을 풀 리퀘스트에 누군가 많은 시간을 낭비하는 사태를 방지합니다. 그리고 여러분의 작업 목록을 관리하기 쉽게 만들어 줍니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests”](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

가끔 잠재적 기여자가 여러분의 거부 의사를 기분 나빠하거나 비판할 수 있습니다. 그들의 행동이 적대적으로 변한다면 [상황을 완화시키기 위한 조치](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items)를 취하거나, 그들이 건설적으로 협조하려 하지 않는다면 커뮤니티에서 배제하세요.

### 조언을 아끼지 마세요

커뮤니티의 누군가가 주기적으로 프로젝트의 기준을 충족하지 않는 기여를 제출하는 경우가 있습니다. 그런 기여와 기각이 반복되는 것은 어느 쪽에게든 좌절감을 줍니다.

누군가 여러분의 프로젝트에 열성적이지만 약간의 개선이 필요해 보인다면, 인내심을 가지세요. 매 상황마다 기여가 왜 프로젝트의 기대를 채우지 못하는지 구체적으로 설명하세요. 뭔가 할 수 있는 일을 주기 위해 _"good first issue"_ 라벨이 달린 이슈처럼 더 쉽고 명료한 작업을 맡기세요. 시간이 있다면 그들의 첫 기여 과정을 직접 멘토링하거나, 커뮤니티에서 적절한 멘토를 구해주는 것도 고려해 보세요.

## 커뮤니티 활용하기

혼자서 모든 일을 맡을 필요는 없습니다. 프로젝트 커뮤니티가 존재하는 이유가 있습니다! 기여자 커뮤니티가 아직 활성화되어 있지 않더라도, 사용자가 많다면 그들을 작업에 이끌어 보세요.

### 일을 분담하세요

함께 일할 사람이 필요하다면 주위에 부탁하는 것에서부터 시작하세요.

반복적으로 기여하고 있는 사람을 찾았다면 그들에게 더 많은 권한을 주며 그들의 공로를 인정하세요. 그들이 원한다면 관리자 자리까지 맡게 되는 모범적인 경우를 더 많은 사람들에게 보일 수도 있습니다.

@lmccart가 프로젝트 [p5.js](https://github.com/processing/p5.js)에서 발견한 대로 사람들이 [프로젝트의 소유감을 나눌 수 있도록](../building-community/#프로젝트를-공동으로-소유하세요) 독려하면 여러분이 맡는 일의 양을 현저히 줄일 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does “Open Source” Even Mean? p5.js Edition”](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

잠깐이든 영원히든 여러분의 프로젝트를 떠나야 한다면 누군가에게 여러분의 역할을 대신해 달라고 부탁하는 것을 부끄럽게 생각하지 마세요.

프로젝트 방침에 열성적인 사람이 있다면 커밋이나 커뮤니티 관리 권한을 부여하세요. 여러분의 프로젝트를 포크해서 활동적으로 유지보수하는 사람이 있다면 여러분의 원본 프로젝트에서 링크를 제공하는 것도 고려해보세요. 여러분의 프로젝트가 계속 발전하길 바라는 사람이 많다는 것은 좋은 일입니다!

@progrium은 그의 프로젝트 [Dokku](https://github.com/dokku/dokku)에 비전을 적어둔 것이 그가 프로젝트 관리에서 물러나고서도 [원래 목표를 향해 나아가는 데 도움](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/)이 되었다는 사실을 알았습니다.

> 저는 제가 원했던 것과 왜 그걸 원했는지에 대해 위키 페이지를 만들어 설명했어요. 관리자들이 프로젝트를 제가 의도한 대로 움직이기 시작한 것을 보고 놀라지 않을 수 없었습니다! 항상 정확히 제가 의도한 대로 되지는 않았지만, 기록해둔 것과는 가까웠지요.

### 각자에게 필요한 솔루션을 구축하게 하세요

잠재적 기여자가 여러분의 프로젝트가 나아갈 방향에 대해 다른 견해를 가지고 있다면 그들이 따로 만든 포크에서 작업하도록 정중하게 권할 수 있습니다.

프로젝트를 포크하는 것은 나쁜 일이 아닙니다. 온갖 프로젝트를 복사하고 수정할 수 있다는 것은 오픈소스의 최고 장점 중 하나입니다. 커뮤니티 구성원들이 포크해서 작업할 수 있게 권장하면 프로젝트 비전과 충돌하는 일 없이 그들의 상상력을 표출할 곳을 마련해줄 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs”](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

여러분의 대역폭이 닿지 않는 기능을 간절히 원하는 사용자가 있을 때도 같은 방법이 적용됩니다. API와 사용자 정의 후크를 제공하면 사용자들이 소스를 직접 수정하지 않고서도 필요한 것을 구현하는 데 도움이 됩니다. @orta는 CocoaPods에서 플러그인 제작을 권장한 덕분에 몇몇 흥미로운 아이디어를 [얻기도 했습니다](https://artsy.github.io/blog/2016/07/03/handling-big-projects/).

> 프로젝트가 커지면 관리자들이 새 코드에 보수적이게 되는 것은 거의 피할 수 없는 일입니다. 거절하는 데에는 익숙해지지만, 여전히 많은 사람들이 합리적인 수요를 가지고 있지요. 그래서 툴로서 개발했던 것을 대신 플랫폼으로 바꾸게 되었습니다.

## 봇 활용하기

남들이 도와줄 수 있는 일이 있는 것처럼, 굳이 사람이 할 필요가 없는 일도 있습니다. 로봇은 여러분의 친구입니다. 관리자로서의 삶을 더 쉽게 만들기 위해 로봇을 이용하세요.

### 코드의 질을 개선하기 위해 테스트를 거치도록 하세요

여러분의 프로젝트를 자동화하는 가장 중요한 방법 중 하나는 테스트를 추가하는 것입니다.

테스트는 기여자가 아무것도 망가트리지 않았다는 확신을 가질 수 있게 해줍니다. 여러분이 기여를 더 빨리 검토하고 적용하기에도 좋습니다. 여러분이 더 적극적으로 반응한다면 커뮤니티의 모두도 더 적극적으로 참여할 것입니다.

들어오는 기여를 대상으로 자동으로 수행되는 테스트를 작성하고, 기여자들이 테스트를 로컬에서도 쉽게 수행할 수 있게 구성하세요. 모든 코드 기여는 제출되기 전에 테스트를 통과하도록 하세요. 모든 제출물에 대해 최소한의 수준을 확보할 수 있을 것입니다. GitHub의 [Required status checks](https://help.github.com/articles/about-required-status-checks/) 기능은 어떤 커밋도 테스트를 통과하지 않고서는 병합되지 않도록 도와줍니다.

테스트를 추가할 때는 반드시 CONTRIBUTING 파일에 어떻게 테스트가 동작하는지 설명하세요.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust’s Community Automation”](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### 기본적인 유지보수에는 툴을 이용하세요

인기 있는 프로젝트를 관리하는 사람들에게 좋은 소식은, 다른 관리자들이 이미 비슷한 상황을 겪어 그에 대한 해결책을 마련해두었다는 점입니다.

유지보수 작업의 몇몇 사항을 자동화해주는 [다양한 툴](https://github.com/showcases/tools-for-open-source)이 있습니다. 이하는 약간의 예시입니다.

* [semantic-release](https://github.com/semantic-release/semantic-release)는 배포를 자동화합니다.
* [mention-bot](https://github.com/facebook/mention-bot)은 풀 리퀘스트의 잠재적 검토자를 호출합니다.
* [Danger](https://github.com/danger/danger)는 코드 검토의 자동화를 지원합니다.

GitHub에서는 버그 제보나 기타 평범한 기여에 사용할 [이슈 템플릿과 풀 리퀘스트 템플릿](https://github.com/blog/2111-issue-and-pull-request-templates)을 제공합니다. 이를 활용하면 의사소통을 능률적으로 진행할 수 있습니다. @TalAter는 여러분의 이슈와 풀 리퀘스트 템플릿 작성을 돕기 위해 [Choose Your Own Adventure](https://www.talater.com/open-source-templates/#/) 가이드를 만들었습니다.

이메일 알림 관리에는 우선순위별로 이메일을 분류하는 [이메일 필터](https://github.com/blog/2203-email-updates-about-your-own-activity)를 설정하는 방법이 있습니다.

여기에 더하고 싶다면 스타일 가이드와 린터(linter)를 이용해 프로젝트에의 기여를 표준화하고, 검토하거나 적용하기 더 쉽게 만들 수 있습니다.

하지만 너무 복잡한 기준은 기여까지의 장벽을 높입니다. 모두의 삶을 편하게 해줄 수 있는 필요한 규칙만 추가하세요.

어떤 툴을 사용할지 잘 모르겠다면 다른 유명한 프로젝트들은 어떻게 하고 있는지 살펴보세요. 특히 여러분의 프로젝트와 비슷한 분야를 찾아보세요. 예컨대, 다른 Node 모듈은 어떤 기여 과정을 가지고 있나요? 다른 프로젝트들과 비슷한 툴과 접근 방식을 적용하면 잠재적 기여자들에게 과정이 익숙하다는 장점도 있습니다.

## 잠시 멈춰도 괜찮습니다

오픈소스는 즐겨야만 의미가 있습니다. 혹시 오픈소스가 여러분에게 부담감이나 죄책감을 가져다주고 있지는 않나요?

어쩌면 여러분은 여러분이 맡은 프로젝트를 생각할 때마다 의지가 꺾이거나 두려움을 느낄지도 모릅니다. 게다가 그러는 동안에도 이슈와 풀 리퀘스트는 쌓이고 있고요.

신경쇠약은 오픈소스 관리자들이 실제로 직면하는 보편적인 문제입니다. 관리자로서 여러분의 행복은 그 어떤 오픈소스 프로젝트의 생존과도 타협하고 포기해야 하는 것이 아닙니다.

말할 것도 없지만, 쉬면서 하세요! 완전히 지쳤을 때에만 휴가를 낼 필요는 없습니다. Python 핵심 개발자인 @brettcannon은 14년간의 자발적인 오픈소스 기여 후 [한 달간의 휴가](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering)를 떠나기로 결정했습니다.

다른 일들이 그렇듯, 정기적으로 휴식을 취하면 상쾌함과 행복감을 유지할 수 있고 여러분의 업무가 즐거울 것입니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you’re now the maintainer of a popular open source project”](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

가끔, 모두가 여러분을 필요로 하는 것처럼 느껴져 쉬기 곤란할 때가 있습니다. 심지어 사람들이 여러분이 업무를 멈추지 못하게 하려고 부담을 줄 수도 있습니다.

여러분이 프로젝트를 떠나 있는 동안 커뮤니티를 관리할 사람을 찾는 데 최선을 다하세요. 필요한 도움을 구하지 못했어도 하여튼 쉴 때는 쉬어야 합니다. 사람들이 여러분의 무반응에 혼란스러워하지 않도록, 작업을 맡지 않고 있을 때에도 의사소통은 잊지 마세요.

휴식을 취한다는 것은 단순히 휴가를 말하는 것이 아닙니다. 주말 혹은 근무 시간 중에는 오픈소스 작업을 하고 싶지 않다면 사람들이 여러분을 번거롭게 하지 않도록 그 사실을 알리세요.

## 여러분이 최우선입니다

인기 있는 프로젝트의 관리는 초기 성장 단계와 다른 기술을 필요로 하지만 그만큼 보람 있는 일입니다. 관리자로서 여러분은 소수의 사람들만이 경험할 수 있는 수준에서 리더십과 개인 기술을 연마할 수 있습니다. 관리가 항상 쉬운 것은 아니지만, 명확한 경계를 설정하고 여러분이 편하게 느끼는 일을 맡아 하며 행복과 신선함과 생산성을 유지하세요.
