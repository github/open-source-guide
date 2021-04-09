---
lang: ko
title: 마음을 끄는 커뮤니티 만들기
description: 사람들이 프로젝트를 사용하고, 기여하고, 전파하도록 격려하는 커뮤니티를 만드세요.
class: building
order: 4
image: /assets/images/cards/building.png
related:
  - best-practices
  - coc
---

## Setting your project up for success

여러분의 프로젝트가 공개되었습니다. 홍보를 하니 찾아오는 사람들도 생겼습니다. 멋지군요! 그들을 곁에 머물게 하려면 이제 어떻게 해야 할까요?

마음을 끄는 커뮤니티를 만드는 것은 프로젝트의 미래와 평판을 위한 투자입니다. 여러분의 프로젝트가 이제 막 첫 기여를 받는 시점이라면, 기여자들에게 좋은 경험을 안겨 주고 계속 다시 돌아오게 만드세요.

### 사람들이 환영받는다고 느끼게 하세요

@MikeMcQuaid가 [contributor funnel](https://mikemcquaid.com/2018/08/14/the-open-source-contributor-funnel-why-people-dont-contribute-to-your-open-source-project/)(기여자 깔때기)이라고 부르는 것을 통해 프로젝트 커뮤니티에 대해 생각해 볼 수 있습니다.

![Contributor funnel](/assets/images/building-community/contributor_funnel_mikemcquaid.png)

커뮤니티가 성장함에 따라 깔때기 맨 위에 있는 누군가(잠재 사용자)가 맨 아래(활동적인 유지관리자)까지 나아갈 수 있는 방법을 생각해 보세요. 여러분의 목표는 기여 경험의 각 단계에서 발생하는 마찰력을 최소화하는 것입니다. 사람들은 쉽게 보답을 받을수록 더 많은 일을 할 동기를 받습니다.

문서화에서부터 시작하세요.

* **프로젝트를 사용하기 쉽게 만드세요.** [친절한 README](../starting-a-project/#readme-파일-작성하기)와 명료한 코드 예제를 사용한다면 프로젝트에 막 착수한 사람도 쉽게 시작할 수 있습니다.
* **기여 방법을 명확하게 설명하세요.**, [CONTRIBUTING 파일](../starting-a-project/#기여-가이드라인-작성하기)을 관리하고 이슈를 최신 상태로 유지하세요.

[GitHub의 2017 오픈소스 설문조사](http://opensourcesurvey.org/2017/)에 따르면 오픈소스 사용자들에게 가장 큰 문제는 불완전하거나 애매한 문서화라고 합니다. 좋은 문서화는 사람들이 여러분의 프로젝트에 관심을 갖게 합니다. 결국 누군가 이슈나 풀 리퀘스트를 열 것입니다. 다음과 같은 방법을 사용해 사람들을 깔때기 아래까지 이끌어 보세요.

* **새로운 사람이 프로젝트에 찾아오면 그들의 관심에 감사를 표하세요!** 처음 온 사람은 단 한 번의 부정적인 경험으로도 다시 프로젝트에 돌아오지 않게 될 수 있습니다.
* **적극적으로 반응하세요.** 이슈에 한 달 이상 반응하지 않았다면 이슈를 올린 사람은 이미 여러분의 프로젝트를 잊었을지도 모릅니다.
* **열린 마음을 가지고 다양한 유형의 기여를 받아들이세요.** 많은 기여자들이 처음에는 버그 제보나 작은 수정에서부터 시작합니다. 프로젝트에 기여하는 데에는 [다양한 방법](../how-to-contribute/#what-it-means-to-contribute)이 있습니다. 그들이 원하는 방식으로 여러분을 도울 수 있게 하세요.
* **받아들일 수 없는 기여가 있다면,** 먼저 그들의 아이디어에 감사하고, 왜 그 기여가 프로젝트의 의도에 맞지 않는지 [이유를 설명](../best-practices/#거절하는-법-배우기)하세요. 관련 문서가 있다면 링크를 첨부하는 것이 좋습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  Contributing to open source is easier for some than others. There's a lot of fear of being yelled at for not doing something right or just not fitting in. (...) By giving contributors a place to contribute with very low technical proficiency (documentation, web content markdown, etc) you can greatly reduce those concerns.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Growing a contributor base in modern open source”](https://opensource.com/life/16/5/growing-contributor-base-modern-open-source)
  </p>
</aside>

오픈소스 제공자의 대다수는 이따금씩만 프로젝트에 기여하는 "임시 기여자"입니다. 임시 기여자들은 프로젝트의 진도를 따라갈 시간이 없을 수도 있습니다. 즉 그들이 기여하기 쉬운 환경을 만들어두는 것은 여러분의 역할입니다.

사람들의 기여를 장려하는 것은 여러분 스스로를 위한 투자이기도 합니다. 여러분의 프로젝트를 가장 좋아하는 사람에게 그들이 좋아하는 일을 할 수 있는 권한을 준다면, 모든 것을 혼자 해야 하는 부담감을 덜 수 있습니다.

### 모든 것을 문서화하세요

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Have you ever been to a (tech-) event where you didn't know anyone, but everyone else seemed to stand in groups and chat like old friends? (...) Now imagine you want to contribute to an open source project, but you don't see why or how this is happening.
  <p markdown="1" class="pquote-credit">
— @janl, ["Sustainable Open Source”](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

새로운 프로젝트를 시작하면 작업 내용을 공개하고 싶지 않을 수도 있습니다. 하지만 오픈소스 프로젝트는 여러분의 작업 과정을 공개해야 번창할 수 있습니다.

여러분이 하고 있는 일을 기록해 두면 더 많은 사람들이 각 단계에서 프로젝트에 참여할 수 있습니다. 여러분이 생각지도 못한 부분에서 도움을 얻을 수도 있습니다.

작업 내용을 적는다는 것은 단순한 기술적 문서화 이상의 것을 의미합니다. 뭔가 기록하거나 사적으로 프로젝트에 대해 토론하고 싶다는 생각이 들면 이를 공개할 수 있을지 자문해 보세요.

프로젝트 로드맵, 원하는 기여 유형, 기여를 검토하는 방식, 특정 결정을 내린 이유 등을 분명하게 밝히세요.

여러 사용자가 같은 문제를 겪는 것을 알게 됐다면 그 해결책을 README에 문서화하세요.

회의의 경우, 관련 이슈에 메모나 테이크아웃을 게시해 보세요. 이 투명성 수준에서 얻을 수 있는 피드백은 당신을 놀라게 할 수 있습니다.

모든 것의 문서화는 여러분이 진행 중인 작업에도 해당됩니다. 여러분이 프로젝트의 큰 업데이트 작업을 하고 있다면 이를 풀 리퀘스트로 열고 WIP(Work In Progress; 작업 중)로 표시하세요. 그렇게 하면 일찍부터 사람들이 과정에 참여할 수 있습니다.

### 적극적으로 반응하세요

[프로젝트를 홍보](../finding-users)하다 보면 사람들이 여러분에게 피드백을 제공할 것입니다. 어떤 부분이 어떻게 동작하는지 알고 싶어할 수도 있고, 처음 접하는 데 도움이 필요할 수도 있습니다.

누군가 이슈를 열거나 풀 리퀘스트를 제출하거나 질문을 하면 적극적으로 반응할 수 있도록 노력하세요. 제때 피드백에 반응하면 사람들은 대화에 참여하고 있다는 느낌을 받고, 더 열정적으로 기여할 것입니다.

즉시 반응하기 힘들더라도 그 사실을 알려두는 것이 참여율을 높이기 좋습니다. @tdreyno가 [Middleman](https://github.com/middleman/middleman/pull/1466)에서 풀 리퀘스트에 어떻게 대응했는지 참고하세요.

![Middleman 풀 리퀘스트](/assets/images/building-community/middleman_pr.png)

[Mozilla에서의 조사](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177)에 따르면 48시간 안에 코드 리뷰를 받은 기여자는 추가 기여를 할 확률이 훨씬 높다고 합니다.

여러분의 프로젝트에 대한 대화는 Stack Overflow나 Twitter, Reddit처럼 인터넷상의 다른 곳에서 이루어지고 있을 수도 있습니다. 이러한 사이트에서 여러분의 프로젝트가 언급되었을 때 알 수 있도록 알림을 설정할 수 있습니다.

### 커뮤니티가 모일 장소를 제공하세요

커뮤니티가 모일 장소를 제공해야 하는 데에는 두 가지 이유가 있습니다.

첫 번째 이유는 커뮤니티 구성원들을 위해서입니다. 사람들이 서로 알아갈 수 있도록 도우세요. 같은 분야에 흥미가 있는 사람들은 그것에 대해 이야기 나눌 곳을 원하기 마련입니다. 그리고 의사소통이 접근성 있는 장소에서 공개적으로 이루어져야 누구나 대화 내역을 읽고 현재 상황을 따라잡아 프로젝트에 빠르게 참여할 수 있습니다.

두 번째 이유는 여러분을 위해서입니다. 프로젝트에 대해 이야기할 공개된 장소가 없다면 사람들은 여러분에게 직접 연락할 것입니다. 처음에는 이런 개인 메시지에 답하는 방식이 "일단은" 충분히 편하게 느껴질 수 있습니다. 하지만 시간이 지나 프로젝트가 유명해지면 결국 지치고 말 것입니다. 여러분의 프로젝트에 대해 비공개적으로 이야기하고 싶은 유혹을 참고 공개된 채널로 사람들을 안내하세요.

공개적인 의사소통은 사람들이 여러분에게 직접 메일을 보내거나 블로그에 댓글을 다는 대신 이슈를 열게 하는 것처럼 간단하게 이룰 수 있습니다. 프로젝트 관련 대화를 위해 메일링 리스트, Twitter 계정, Slack이나 IRC 채널을 만드는 방법도 있습니다. 물론 전부 다 할 수도 있습니다!

[Kubernetes kops](https://github.com/kubernetes/kops#getting-involved)는 격주마다 커뮤니티 구성원들을 돕기 위해 일과 중 시간을 마련했습니다.

> 또한 Kops는 커뮤니티에 대한 도움과 안내를 제공하기 위해 격주마다 시간을 마련했다. Kops 관리자들은 신입을 돕거나, 풀 리퀘스트에 협조하거나, 새 기능에 대해 토론하기 위한 시간을 할당하는 데 찬성했다.

공개적인 의사소통은 중요하지만 예외도 있습니다. 보안 관련 이슈나 민감한 행동 강령 위반 사항이 바로 그것입니다. 이러한 문제는 비공개적으로 보고될 수 있어야 합니다. 개인 이메일을 사용하기 꺼려진다면 프로젝트를 위한 이메일 주소를 준비하세요.

## Growing your community

커뮤니티는 아주 강력한 힘을 지니고 있습니다. 그 힘은 어떻게 다루느냐에 따라 축복이 될 수도, 저주가 될 수도 있습니다. 성장하는 커뮤니티를 파괴의 힘이 아닌 창조의 힘으로 이끄는 방법을 알아봅시다.

### 악당에게 관용을 베풀지 마세요

인기 있는 프로젝트라면 커뮤니티를 돕기는커녕 해치는 사람들이 나타나기 마련입니다. 불필요한 논쟁을 일으키고, 사소한 기능에 트집을 잡고, 남을 괴롭히는 사람들입니다.

이런 유형의 사람들에 대해서는 즉각적인 조치를 취해야 합니다. 그냥 넘어간다면 부정적인 사람들이 커뮤니티의 다른 사람들을 불쾌하게, 떠나게까지 만들 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/okdistribute?s=180" class="pquote-avatar" alt="avatar">
  The truth is that having a supportive community is key. I'd never be able to do this work without the help of my colleagues, friendly internet strangers, and chatty IRC channels. (...) Don't settle for less. Don't settle for assholes.
  <p markdown="1" class="pquote-credit">
— @okdistribute, ["FOSS 프로젝트를 어떻게 실행하는가"](https://okdistribute.xyz/post/okf-de)
  </p>
</aside>

프로젝트의 사소한 면에 대한 반복적인 논쟁은 여러분을 포함한 구성원이 보다 중요한 일에 집중하는 것을 방해합니다. 여러분의 프로젝트에 새로 찾아온 사람들이 이런 논쟁을 보면 프로젝트에 참여하고 싶지 않을 것입니다.

여러분의 프로젝트에서 행해지는 옳지 않은 행동을 발견한다면, 친절하지만 완고하게 어째서 그런 행동이 용납될 수 없는지 공적으로 설명하세요. 문제가 지속된다면 [그들을 떠나보내야 할 수도 있습니다](../code-of-conduct/#enforcing-your-code-of-conduct). 프로젝트 [행동 강령](../code-of-conduct/)이 이런 대화의 적절한 지침이 될 것입니다.

### 기여자에게 먼저 다가가세요

커뮤니티가 성장할수록 좋은 문서화는 더욱 중요해집니다. 여러분의 프로젝트를 잘 몰랐을 평범한 기여자들도 문서를 읽고 빠르게 필요한 맥락을 파악할 수 있기 때문입니다.

CONTRIBUTING 파일에 새 기여자들이 시작할 방법을 자세히 설명하세요. 이를 위한 파트를 따로 마련해도 좋습니다. 예컨대 [Django](https://github.com/django/django)는 새 기여자를 환영하기 위한 특별한 페이지를 가지고 있습니다.

![Django 새로운 기여자 페이지](/assets/images/building-community/django_new_contributors.png)

이슈 목록에 다양한 유형의 기여자들을 위한 라벨을 표시하세요. [_"first timers only"_](https://kentcdodds.com/blog/first-timers-only), _"good first issue"_, _"documentation"_ 같은 예가 있습니다. [이러한 라벨은](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14)
프로젝트에 새로 온 사람들이 빠르게 이슈를 확인하고 기여를 시작하기 쉽게 만들어 줍니다.

마지막으로, 기여의 모든 단계에서 사람들이 좋은 기분을 유지할 수 있도록 문서를 활용하세요.

여러분의 프로젝트에서 작업하는 대부분의 사람과는 직접 의사소통할 기회가 없을 것입니다. 누군가 자신이 없거나 어디서 시작할지 갈피를 잡지 못해서, 결국 하지 못한 기여 또한 있을 것입니다. 친절함을 담은 몇 마디면 사람들이 실망한 채 프로젝트를 떠나는 것을 예방할 수 있습니다.

[Rubinius](https://github.com/rubinius/rubinius/)의 [기여 가이드](https://github.com/rubinius/rubinius/blob/HEAD/.github/contributing.md)는 어떻게 시작하는지 참조하세요.

> Rubinius를 사용해 주시는 것에 대해 먼저 감사의 말씀을 드리고 싶습니다. 이 프로젝트는 여러분의 사랑의 산출물이며, 저희는 버그를 잡고, 성능을 개선하고, 문서화를 돕는 모든 여러분께 고마움을 느낍니다. 모든 기여는 의미가 있습니다. 프로젝트에 참여해 주셔서 감사합니다. 다만, 저희가 여러분의 이슈를 받아들이기 위해 필요로 하는 몇 가지 지침이 있으니 참고해 주세요.

### 프로젝트를 공동으로 소유하세요

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/sagesharp?s=180" class="pquote-avatar" alt="avatar">
  Your leaders will have different opinions, as all healthy communities should! However, you need to take steps to ensure the loudest voice doesn't always win by tiring people out, and that less prominent and minority voices are heard.
  <p markdown="1" class="pquote-credit">
— @sagesharp, ["What makes a good community?”](https://sage.thesharps.us/2015/10/06/what-makes-a-good-community/)
  </p>
</aside>

사람들은 프로젝트에 대한 일종의 소유감을 느낄 때 더 열심히 기여합니다. 프로젝트의 비전을 바꾸거나 원치 않는 기여를 받아들이라는 뜻이 아닙니다. 하지만 사람들에게 공적을 돌릴수록 그들은 더 오래 여러분과 함께할 것입니다.

커뮤니티와 프로젝트의 소유감을 최대한 나눌 수 있는 방법에는 무엇이 있는지 알아봅시다.

* **(사소하고) 쉬운 버그는 직접 해결하지 말고** 새로운 기여자를 위해 남겨 두거나, 기여하려는 사람에게 멘토링하는 데 활용하세요. 처음에는 부자연스럽게 느껴질 수 있지만, 시간이 지나면서 여러분의 투자가 결실을 맺게 될 것입니다. [Cookiecutter](https://github.com/audreyr/cookiecutter)의 @michaeljoseph은 아래 이슈를 직접 고치는 대신 기여자에게 새 풀 리퀘스트를 제출해 달라고 했습니다.

![Cookiecutter 이슈](/assets/images/building-community/cookiecutter_submit_pr.png)

* [Sinatra](https://github.com/sinatra/sinatra/blob/HEAD/AUTHORS.md)가 사용하는 방법처럼 **CONTRIBUTORS 혹은 AUTHORS 파일**을 만들어 모든 프로젝트 기여자를 담은 하나의 목록을 작성하세요.

* 어느 정도 규모의 커뮤니티가 형성됐다면 기여자들에 대한 감사를 담은 **뉴스 레터를 보내거나 블로그 포스트를 게시하세요**. Rust의 [This Week in Rust](https://this-week-in-rust.org/)와 Hoodie의 [Shoutouts](http://hood.ie/blog/shoutouts-week-24.html)가 좋은 예입니다.

* **모든 참여자에게 커밋 권한을 부여하세요.** @felixge는 이 방법이 사람들이 [더 열심히 패치를 개선하게 한다는 사실](http://felixge.de/2013/03/11/the-pull-request-hack.html)을 알았고, 그가 자리에 없는 동안 프로젝트 관리자 일을 맡아 주는 사람들을 발견하기도 했습니다.

* 여러분의 프로젝트가 GitHub에서 진행되고 있다면 **프로젝트를 개인 계정에서 [조직 계정](https://help.github.com/articles/creating-a-new-organization-account/)으로 옮기고** 예비 관리자를 등록하세요. 조직 계정을 활용하면 외부의 협력자들과 함께 일하기 더 쉽습니다.

현실에서 [대부분의 프로젝트](https://peerj.com/preprints/1233.pdf)는 한두 명의 관리자가 거의 모든 일을 담당합니다. 여러분의 프로젝트와 커뮤니티가 성장할수록 위 방법이 도움을 구하기 좋습니다.

항상 도움을 줄 수 있는 사람을 찾을 수 있는 것은 아니지만, 신호를 보내는 것은 그럴 확률을 높입니다. 여러분이 일찍 시작할수록 사람들은 더 빨리 도울 수 있습니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gr2m?s=180" class="pquote-avatar" alt="avatar">
  \[It's in your\] best interest to recruit contributors who enjoy and who are capable of doing the things that you are not. Do you enjoy coding, but not answering issues? Then identify those individuals in your community who do and let them have it.
  <p markdown="1" class="pquote-credit">
— @gr2m, ["Welcoming Communities”](http://hood.ie/blog/welcoming-communities.html)
  </p>
</aside>

## Resolving conflicts

프로젝트 초기에는 결정을 내리기 쉽습니다. 하고 싶은 일이 있다면, 얼마든 그렇게 하세요.

여러분의 프로젝트가 유명해질수록 사람들은 여러분이 내리는 결정에 관심을 가지게 될 것입니다. 기여자가 많은 것이 아니더라도 유저가 많다면 사람들이 이슈 제보나 여러분의 결정을 중요하게 생각하고 있다는 것을 알 수 있습니다.

친근하면서도 정중한 커뮤니티를 일구고 작업을 공개적으로 기록하며 진행했다면 여러분의 커뮤니티는 대부분의 경우 해결책을 찾을 수 있을 것입니다. 하지만 가끔은 다루기 어려운 문제에 당면할 때도 있습니다.

### 친절에 대한 기준을 세우세요

복잡한 이슈를 두고 접전을 벌이면 커뮤니티 분위기가 팽팽해질 수 있습니다. 사람들이 화를 내거나 실망하고 이를 다른 사람이나 여러분에게 표출할 수도 있습니다.

관리자로서 상황이 심각해지지 않도록 조정하는 것이 여러분의 역할입니다. 해당 주제에 관해 뚜렷한 주장을 가지고 있더라도, 싸움에 뛰어들어 여러분의 의견을 밀어붙이지 말고 의장 혹은 사회자로서의 역할을 맡을 수 있도록 하세요. 누군가 불친절하게 행동하거나 발언권을 독차지하려 한다면 정중하고 생산성 있는 토론이 유지될 수 있도록 [즉각 대응](../building-community/#악당에게-관용을-베풀지-마세요)하세요.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kennethreitz?s=180" class="pquote-avatar" alt="avatar">
  As a project maintainer, it's extremely important to be respectful to your contributors. They often take what you say very personally.
  <p markdown="1" class="pquote-credit">
— @kennethreitz, ["Be Cordial or Be on Your Way”](https://web.archive.org/web/20200509154531/https://kenreitz.org/essays/be-cordial-or-be-on-your-way)
  </p>
</aside>

여러분의 본보기를 기다리는 사람들도 있습니다. 모범을 보이세요. 실망감이나 불만, 걱정을 표현할 수도 있습니다. 하지만 침착함을 유지하세요.

이성을 유지하는 것은 쉽지 않습니다. 하지만 리더십을 보여야 커뮤니티를 더 건전하게 유지할 수 있습니다. 온 인터넷이 여러분에게 고마워할 것입니다.

### README 파일을 골자로 다루세요

README 파일은 [단순한 안내서 이상](../starting-a-project/#readme-파일-작성하기)의 것입니다. 여러분의 목표, 프로젝트 비전, 로드맵에 대해서도 적을 수 있습니다. 사람들이 특정 기능의 유용성을 토론하는 데에만 과도하게 몰입해 있을 때, README 파일을 다시 읽고 프로젝트의 더 높은 비전에 대해 이야기하면 도움이 될 것입니다. 또한 README 파일에 집중하면 대화를 객관화하여 건설적인 토론을 할 수 있습니다.

### 목적지가 아닌 여정에 초점을 맞추세요

몇몇 프로젝트는 중요한 결정을 투표를 통해 결정합니다. 척 보기에는 실용적이지만, 투표는 '정답'을 찾는 데 집중하지 서로 의견을 교환하고 고려하는 방식으로는 적합하지 않습니다.

투표 제도는 자칫 정치적인 성향을 띠게 될 수 있습니다. 커뮤니티 구성원들이 특정한 방향으로 투표하도록 압박감을 느낄 수 있기 떄문입니다. 모든 사람이 투표를 하는 것도 아닙니다. 커뮤니티를 [조용히 지켜보는 대다수](http://ben.balter.com/2016/03/08/optimizing-for-power-users-and-edge-cases/#the-silent-majority-of-users), 혹은 투표의 존재조차 모르는 사용자도 있습니다.

가끔은 투표로 결정을 내려야 할 때도 있습니다. 하지만 가능한 한 합의점 자체보다 ['합의점을 찾는 과정'](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making)에 강세를 두세요.

합의점을 찾는 과정에서, 커뮤니티 구성원들은 본인의 발언이 충분히 귀담아들어졌다고 생각될 때까지 주요 의견을 피력할 것입니다. 사소한 걱정거리만 남았을 때에야 커뮤니티는 앞으로 나아갑니다. '합의점을 찾는다'는 표현은 커뮤니티가 하나의 완벽한 정답에 도달하지는 못할 수도 있다는 것을 나타냅니다. 대신 의견을 듣고 토론하는 데 집중할 뿐입니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lee-dohm?s=180" class="pquote-avatar" alt="avatar">
  Part of the reason why a voting system doesn't exist for Atom Issues is because the Atom team isn't going to follow a voting system in all cases. Sometimes we have to choose what we feel is right even if it is unpopular. (...) What I can offer and pledge to do...is that it is my job to listen to the community.
  <p markdown="1" class="pquote-credit">
— @lee-dohm on [Atom’s decisionmaking process](https://discuss.atom.io/t/prioritize-issues-feature-requests-based-on-voting-system/27642/2)
  </p>
</aside>

반드시 합의점을 찾는 과정을 문제 해결에 적용하지 않더라도, 여러분이 프로젝트 관리자로서 모두의 이야기를 듣고 있음을 알려주는 것이 중요합니다. 사람들의 이야기를 귀담아듣고, 문제를 해결해 주기 위해 전념하는 것은 시간과 노력이 들지만 민감한 상황을 피할 수 있습니다. 여러분의 말을 행동으로 책임지세요.

해결책을 찾으려고 섣부른 결정을 내리지 마세요. 모두의 의견을 듣고 모든 정보를 공개한 다음 해결책을 향해 나아가야 합니다.

### 행동에 중점을 둔 대화를 이어가세요

토론은 중요합니다. 하지만 생산적인 토론과 비생산적인 토론에는 차이가 있습니다.

해결책을 향해 실질적으로 나아가는 토론을 장려하세요. 이야기가 침체되거나, 주제에서 벗어나거나, 대화에 감정이 실리기 시작하거나, 사람들이 사소한 사항으로 트집을 잡고 있다면 멈춰야 합니다.

이런 토론이 지속되도록 내버려두는 것은 해결해야 할 이슈뿐 아니라 커뮤니티의 건강에도 나쁜 영향을 줄 수 있습니다. 사람들은 이런 식의 토론이 허락되거나 심지어 장려된다고까지 생각할 수 있으며, 장래의 이슈를 발의하거나 해결하지 못하게 될 수 있습니다.

여러분 혹은 누군가가 만든 모든 논점에 대해 자문해 보세요. "이 대화가 어떻게 우리를 해결책으로 이끌어줄 수 있을까?"

대화가 풀리기 시작했다면 다시 집중하기 위해 사람들에게 물어보세요. "이제 어떻게 할까요?"

대화가 진전되지 않는다면 마땅히 취할 조치가 없거나 이미 적절한 조치가 취해진 것입니다. 이슈를 닫고 그 이유를 설명하세요.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kfogel?s=180" class="pquote-avatar" alt="avatar">
  Guiding a thread toward usefulness without being pushy is an art. It won't work to simply admonish people to stop wasting their time, or to ask them not to post unless they have something constructive to say. (...) Instead, you have to suggest conditions for further progress: give people a route, a path to follow that leads to the results you want, yet without sounding like you're dictating conduct.
  <p markdown="1" class="pquote-credit">
— @kfogel, [_Producing OSS_](http://producingoss.com/en/producingoss.html#common-pitfalls)
  </p>
</aside>

### 전장은 현명하게 선택하세요

문맥 역시 중요합니다. 토론에 누가 참여하고 있는지, 그들이 커뮤니티의 나머지를 어떻게 대표하는지 고려하세요.

커뮤니티의 모두가 이 이슈에 대해 관심이나 불만을 가지고 있나요? 아니면 한 명이 문제를 일으키고 있는 것인가요? 직접 발언하는 대신 지켜보고 있는 커뮤니티 구성원들이 있음을 잊지 마세요.

이슈가 커뮤니티의 전반적인 수요를 충족시키지 않는 것이라면 소수의 걱정을 인정하는 것으로 충분할 수 있습니다. 해당 주제에 관한 기존 토론으로 안내하고 이슈를 닫으세요.

### 커뮤니티 해결사를 선정하세요

좋은 태도와 명확한 의사소통으로 대부분의 어려운 상황은 해결할 수 있습니다. 그러나 생산적인 대화에서도 어떻게 진행해야 하는가에 대한 의견 차이는 있을 수 있습니다. 이럴 때는 해결사 역할을 할 수 있는 개인이나 집단을 선정하세요.

해결사는 프로젝트 대표 관리자일 수도 있고, 투표를 기반으로 결정을 내리는 집단일 수도 있습니다. 해결사를 활용할 일이 생기기 전에 GOVERNANCE 파일에 해결사와 관련 절차를 명시해 두는 것이 이상적입니다.

해결사는 마지막 방책으로서 쓰여야 합니다. 의견이 엇갈리는 이슈는 여러분의 커뮤니티가 배우고 성장할 기회입니다. 이러한 기회를 놓치지 말고 협력적인 과정을 통해 가능한 해결책을 향해 나아가세요.

## Community is the ❤️ of open source

건강하고 번성하는 커뮤니티는 매주 오픈소스에 채워지는 수천 시간의 연료가 됩니다. 많은 기여자들이 오픈소스에 기여하(거나 하지 않)는 이유로서 다른 기여자들을 꼽습니다. 커뮤니티의 힘을 건설적으로 다루는 법을 배움으로써 여러분은 누군가가 잊을 수 없는 오픈소스 경험을 가질 수 있도록 도울 것입니다.
