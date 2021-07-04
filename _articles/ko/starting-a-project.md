---
lang: ko
title: 오픈소스 프로젝트 시작하기
description: 오픈소스의 세계에 대해 자세히 알아보고 여러분의 프로젝트를 시작할 준비를 해보세요.
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
---

## The "what" and "why" of open source

오픈소스를 시작하려고 하시나요? 축하합니다! 세상이 여러분의 기여를 높이 살 것입니다. 오픈소스란 무엇이며, 왜 사람들이 오픈소스를 사용하는지 알아봅시다.

### "오픈소스"란 무엇인가요?

오픈소스 프로젝트에서는 **누구나 어떤 목적으로든 프로젝트를 보고, 사용하고, 수정하고, 배포할 수 있습니다.** 이러한 권한은 [오픈소스 라이선스](https://opensource.org/licenses)를 통해 적용됩니다.

오픈소스는 채택의 장벽을 낮춰 아이디어를 신속하게 퍼뜨릴 수 있기 때문에 강력합니다.

오픈소스가 어떻게 돌아가는지 이해하기 위해, 친구가 솥밥을 먹고 있는데 여러분이 체리 파이를 가지고 간다고 생각해 보세요.

* 모두가 파이를 먹을 수 있습니다. (_사용_)
* 파이가 히트를 쳤습니다! 그들은 여러분이 만들어 공개한 파이의 레시피를 찾아봅니다. (_소스 뷰_)
* 제과점 주방장인 한 친구 알렉스가 설탕을 줄이는 게 좋겠다고 조언합니다. (_수정_)
* 다른 친구인 리사는 다음 주 저녁 식사에 그 파이를 준비하고 싶다고 요청합니다. (_배포_)

비교해 보면, 독점 소스 과정은 레스토랑에 가서 체리 파이 한 조각을 주문할 것과 같습니다. 여러분은 파이를 먹기 위해 요금을 지불해야 하며 레스토랑은 아마 여러분에게 레시피를 알려주지 않을 것입니다. 만약 파이를 똑같이 베껴 여러분의 이름을 달고 판다면 레스토랑에서 여러분을 고소할 지도 모르죠.

### 왜 사람들은 자기 작업을 오픈소스로 공개하나요?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  One of the most rewarding experiences I get out of using and collaborating on open source comes from the relationships that I build with other developers facing many of the same problems I am.
  <p markdown="1" class="pquote-credit">
— @kentcdodds, ["How getting into Open Source has been awesome for me”](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

사람이나 조직이 프로젝트 소스를 공개하려는 데에는 [여러 가지 이유](http://ben.balter.com/2015/11/23/why-open-source/)가 있습니다. 몇 가지 예는 다음과 같습니다.

* **협업:** 오픈소스 프로젝트는 전 세계 누구에게서든 수정을 받을 수 있습니다. 예를 들어 [Exercism](https://github.com/exercism/)은 350명이 넘는 기여자가 참여하는 프로그래밍 연습 플랫폼입니다.

* **채택과 재가공:** 오픈소스 프로젝트는 거의 모든 용도로 누구나 사용할 수 있습니다. 심지어 사람들이 그 프로젝트를 기반으로 다른 프로젝트를 만들 수도 있습니다. 예컨대 [WordPress](https://github.com/WordPress)는 [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md)라는 기존 프로젝트의 포크로 시작했습니다.

* **투명성:** 누구나 오픈소스 프로젝트에서 오류나 불일치를 검사 할 수 있습니다. 투명성은 [불가리아](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a)나 [미국](https://sourcecode.cio.gov/) 같은 정부, 은행 또는 의료 같은 규제 대상 산업, Let's Encrypt 등의 보안 소프트웨어에는 투명성이 중요합니다.

오픈소스는 소프트웨어만을 위한 것이 아닙니다. 데이터 세트에서부터 서적에 이르기까지 모두 오픈소스로 만들 수 있습니다. [GitHub Explore](https://github.com/explore)에서 다른 오픈소스 아이디어를 확인해 보세요.

### 오픈소스는 "무료"를 의미하나요?

오픈소스의 가장 큰 매력 중 하나는 비용이 들지 않는다는 것입니다. 그러나 "무료"는 오픈소스의 전반적인 가치의 부산물에 불과합니다.

[오픈소스 라이선스](https://opensource.org/osd-annotated)는 누구나 거의 모든 목적으로 프로젝트를 사용, 수정, 공유할 수 있어야 하므로 프로젝트 자체는 무료입니다. 만약 프로젝트에서 비용을 청구한다면 누구나 합법적으로 복사본을 만들어 무료 버전을 사용할 수 있습니다.

결론적으로 대부분의 오픈소스 프로젝트는 무료이지만, "무료"는 오픈소스 정의의 일부가 아닙니다. 오픈소스의 공식적인 정의를 계속 준수하면서도 이중 라이선스 또는 제한된 기능을 통해 간접적으로 오픈소스 프로젝트 사용에 비용을 청구할 수 있는 방법이 있습니다.

## Should I launch my own open source project?

짧게 답하자면 그렇습니다. 결과가 어떻든 여러분 자신의 프로젝트를 시작하는 것이 오픈소스가 돌아가는 방식을 배우기 위한 훌륭한 방법이 되기 때문입니다.

이전에 프로젝트 소스를 공개해본 적이 없다면 누군가 뭐라고 하거나 소스를 보는 것 자체가 긴장될지도 모릅니다. 이게 여러분의 이야기처럼 들리나요? 여러분은 혼자가 아닙니다!

오픈소스 작업은 글을 쓰거나 그림을 그리는 활동과 같습니다. 여러분의 작업을 세상과 공유하기가 두려울 수도 있지만, 발전하는 방법은 연습 뿐입니다. 설령 봐주는 사람이 없더라도요.

아직 확신이 서지 않는다면 여러분의 목표가 무엇인지 잠시 생각해 보세요.

### 목표 설정하기

목표는 여러분이 무엇을 해야 하는지, 무엇을 하지 말아야 하는지, 어디서 도움을 받아야 하는지 찾는 데 도움이 될 수 있습니다. 먼저 왜 프로젝트를 오픈소스화하려고 하는지 자문해 보세요.

이 질문에 대해 정해진 정답은 없습니다. 한 프로젝트에 대해 여러 가지 목표를 가질 수도 있고, 각기 다른 목표를 가진 여러 프로젝트를 진행할 수도 있습니다.

여러분의 유일한 목표가 여러분의 성과를 보여주는 것이라면 기여를 원하지 않을 수도 있고 README 파일에 그렇게 적어둘 수도 있습니다. 반대로 기여자를 원한다면 명확한 문서화에 시간을 투자하고 방문자들을 환영해야 합니다.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  At some point I created a custom UIAlertView that I was using...and I decided to make it open source. So I modified it to be more dynamic and uploaded it to GitHub. I also wrote my first documentation explaining to other developers how to use it on their projects. Probably nobody ever used it because it was a simple project but I was feeling good about my contribution.
  <p markdown="1" class="pquote-credit">
— @mavris, ["Self-taught Software Developers: Why Open Source is important to us”](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576#.zhwo5krlq)
  </p>
</aside>

프로젝트가 성장함에 따라 커뮤니티에는 단순한 코드 이상의 것이 필요할 수 있습니다. 이슈에 대응하고, 코드를 검토하고, 프로젝트를 홍보하는 것은 오픈소스 프로젝트에서 중요한 작업입니다.

코딩이 아닌 작업에 소요되는 시간은 프로젝트의 크기와 범위에 따라 다르지만, 여러분이 직접 관리자로서 문제를 해결하거나 도움을 줄 사람을 찾아야 합니다.

**만약 프로젝트를 오픈소스화하는 회사의 일원이라면** 프로젝트의 성공을 위해 필요한 내부 자원이 있는지 확인하세요. 공개 후 누가 프로젝트 관리 책임이 있는지, 어떻게 작업들을 커뮤니티와 공유할 것인지 파악하고 정해야 합니다.

홍보, 운영 및 프로젝트 유지를 위해 전담 예산이나 인력이 필요한 경우 이런 대화를 조기에 시작하세요.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  As you begin to open source the project, it's important to make sure that your management processes take into consideration the contributions and abilities of the community around your project. Don't be afraid to involve contributors who are not employed in your business in key aspects of the project — especially if they are frequent contributors.
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["So you wanna open source a project, eh?”](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### 다른 프로젝트에 기여하기

사람들과 협업하는 방법을 배우거나 오픈소스가 어떻게 돌아가는지 이해하는 것이 목표라면 기존 프로젝트에 기여하는 것을 고려해 보세요. 여러분이 이미 애용하고 있는 프로젝트에서부터 시작하세요. 오타를 수정하거나 문서를 업데이트하는 것처럼 간단한 것으로도 기여할 수 있습니다.

기여를 시작하는 법을 잘 모르겠다면 [오픈소스에 기여하는 방법 가이드](../how-to-contribute/)를 확인해 보세요.

## Launching your own open source project

프로젝트를 오픈소스화할 정해진 타이밍은 없습니다. 아이디어, 진행중인 작업 혹은 수년이 지난 비공개 소스도 오픈소스화할 수 있습니다.

일반적으로 다른 사람이 여러분의 작업을 보고 피드백을 제공해도 불편할 만한 점이 없을 때 프로젝트를 오픈소스화하면 됩니다.

프로젝트를 오픈소스화하기로 결정한 시점에 상관없이 모든 프로젝트에는 다음과 같은 문서가 포함되어 있어야 합니다.

* [오픈소스 라이선스](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [기여 가이드라인](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [행동 강령](../code-of-conduct/)

관리자는 이러한 구성 요소로 기대치를 전달하고, 기여를 관리하고, (여러분을 포함한) 모두의 법적 권리를 보호할 수 있습니다. 위 문서들은 여러분이 긍정적인 경험을 하게 될 가능성을 크게 증가시킵니다.

프로젝트가 GitHub에 있는 경우, 권장 파일 이름을 적용해 이러한 파일들을 최상위 폴더에 저장해 두면 GitHub에서 해당 파일을 인식해 자동으로 사람들에게 보여줍니다.

### 라이선스 선택하기

오픈소스 라이선스는 사람들이 여러분의 프로젝트에 영향을 주지 않고 사용, 복사, 수정 및 기여할 수 있도록 보장합니다. 또한 복잡하게 얽혀 있는 법적 상황으로부터 당신을 보호합니다. **오픈소스 프로젝트를 시작한다면 반드시 라이선스를 포함해야 합니다.**

법률에 관한 일은 즐겁지 않습니다. 좋은 소식은 기존 라이선스를 복사해 저장소에 붙여넣을 수 있다는 것입니다. 여러분의 노력을 보호하는 데 1분이면 충분할 것입니다.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), 그리고 [GPLv3](https://choosealicense.com/licenses/gpl-3.0/)가 가장 인기있는 오픈소스 라이선스지만 선택할 수있는 [다른 옵션](https://choosealicense.com)도 있습니다.

GitHub에서 새 프로젝트를 만들면 라이선스를 선택할 수 있는 옵션이 제공됩니다. 오픈소스 라이선스를 포함하면 GitHub 프로젝트를 오픈소스로 만들 수 있습니다.

![Pick a license](/assets/images/starting-a-project/repository-license-picker.png)

오픈소스 프로젝트 관리의 법적 측면에 대해 다른 질문이나 우려되는 점이 있다면 [이 내용을 참조하세요](../legal/).

### README 파일 작성하기

README는 프로젝트 사용 방법을 설명하는 것 이상의 일을 수행합니다. 프로젝트가 중요한 이유와 사용자가 프로젝트를 이용해 할 수 있는 작업에 대해서도 설명합니다.

README에서 다음 질문에 답해 보세요.

* 이 프로젝트는 무슨 일을 하나요?
* 이 프로젝트가 유용한 이유는 무엇인가요?
* 어떻게 시작해야 하나요?
* 필요하다면 어디에서 더 많은 도움을 받을 수 있을까요?

README를 사용하여 여러분이 기여를 받아들이는 방식, 프로젝트의 목표, 라이선스 및 속성에 대한 정보와 같은 다른 질문에 답할 수 있습니다. 기여를 받고 싶지 않거나, 프로젝트가 아직 준비되지 않았다면 그렇게 적어 두세요.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Better documentation means more users, less support requests, and more contributors. (...) Remember that your readers aren't you. There are people who might come to a project who have completely different experiences.
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["Writing So Your Words Are Read (video)”](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

때때로 사람들은 프로젝트가 완성되지 않았거나 기여를 원치 않기 때문에 README를 작성하지 않는 경우가 있습니다. 그것도 README를 작성할 좋은 이유입니다.

@18F의 ["Making READMEs Readable"](https://pages.18f.gov/open-source-guide/making-readmes-readable/)에서 더 많은 영감을 얻거나 @PurpleBooth의 [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)을 이용해 전체 README를 작성해 보세요.

README 파일을 최상위 폴더에 포함시키면, GitHub가 자동으로 저장소 홈페이지에 내용을 표시합니다.

### 기여 가이드라인 작성하기

CONTRIBUTING 파일은 잠재 기여자들에게 프로젝트에 기여하는 방법을 알려줍니다. 예를 들어 다음 정보를 포함할 수 있습니다.

* 버그 보고서를 제출하는 방법 ([이슈와 PR 템플릿](https://github.com/blog/2111-issue-and-pull-request-templates)을 사용해 보세요)
* 새로운 기능을 제안하는 방법
* 환경 설정 및 테스트 실행 방법

기술적 세부 사항과 더불어 여러분이 어떤 기여를 기대하는지 전달할 수도 있습니다.

* 원하는 기여 유형
* 프로젝트 로드맵 또는 비전
* 기여자가 여러분과 연락하는 데 사용할 (혹은 사용하지 말아야 할) 방법

따뜻하고 친근한 어조를 사용하고, 문서나 웹사이트 작성 등 기여에 대한 구체적인 제안을 제공하는 것은 새로운 사람들이 기꺼이 기여를 만들게 하는 데 도움이 될 수 있습니다.

예를 들어 [Active Admin](https://github.com/activeadmin/activeadmin/)은 다음과 같이 [기여 가이드](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md)를 시작합니다.

> 먼저, Active Admin에 기여해 주셔서 감사합니다. 여러분의 기여가 Active Admin을 이렇게 훌륭한 툴로 만듭니다.

프로젝트의 초기 단계에서는 CONTRIBUTING 파일이 단순할 수 있습니다. 항상 버그 또는 파일 이슈를 보고하는 방법과 기여에 필요한 테스트 등 기술적 요구 사항을 설명해야 합니다.

시간이 지나면 자주 묻는 질문을 CONTRIBUTING 파일에 추가할 수 있습니다. 이 정보를 적어두면 같은 질문을 반복해서 하는 사람들이 줄어들 것입니다.

CONTRIBUTING 파일을 작성하는 데 도움이 필요하면 @nayafia의 [contributing guide template](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) 또는 @mozilla의 ["How to Build a CONTRIBUTING.md"](http://mozillascience.github.io/working-open-workshop/contributing/)을 참조하세요.

README에 CONTRIBUTING 파일을 링크하면 더 많은 사람들이 읽게 할 수 있습니다. [CONTRIBUTING 파일을 프로젝트의 저장소에 두면](https://help.github.com/articles/setting-guidelines-for-repository-contributors/) 기여자가 이슈를 생성하거나 PR를 열 때 GitHub가 자동으로 링크를 생성합니다.

![Contributing guidelines](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### 행동 강령 세우기

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  We’ve all had experiences where we faced what was probably abuse either as a maintainer trying to explain why something had to be a certain way, or as a user...asking a simple question. (...) A code of conduct becomes an easily referenced and linkable document that indicates that your team takes constructive discourse very seriously.
  <p markdown="1" class="pquote-credit">
— @mlynch, ["Making Open Source a Happier Place”](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f#.v4qhl7t7v)
  </p>
</aside>

마지막으로 행동 강령은 프로젝트 참가자의 행동에 대한 기본 규칙을 정하는 데 도움이 됩니다. 이는 커뮤니티나 회사의 오픈소스 프로젝트를 시작할 때 특히 유용합니다. 행동 강령은 건강하고 건설적인 커뮤니티 행동을 촉진할 수 있게 해 주는데, 이는 관리자 여러분의 스트레스를 줄여줄 것입니다.

자세한 내용은 [행동강령 가이드](../code-of-conduct/)를 참조하세요.

행동 강령은 참여자가 _어떻게_ 행동하기를 기대하는지 전달하는 것 외에, 이러한 기대가 누구에게 적용되는지, 언제 적용되는지, 위반할 경우 어떻게 하는지 등을 다루기도 합니다.

오픈소스 라이선스와 마찬가지로 행동 강령에 대한 새로운 표준도 있으므로 직접 작성할 필요는 없습니다. [Contributor Covenant](https://www.contributor-covenant.org/)는 Kubernetes, Rails 및 Swift를 포함한 [40,000개 이상의 오픈소스 프로젝트](https://www.contributor-covenant.org/adopters)에서 사용되는 행동 강령입니다. 어느 것을 사용하든, 필요에 따라 행동 강령을 시행할 준비가 되어 있어야 합니다.

행동 강령을 저장소의 CODE_OF_CONDUCT 파일에 직접 붙여넣으세요. 파일을 쉽게 찾을 수 있게 프로젝트 최상위 폴더에 저장하고 README에 링크를 첨부하세요.

## Naming and branding your project

브랜딩은 화려한 로고나 매력적인 프로젝트 이름 그 이상입니다. 브랜딩은 여러분이 프로젝트를 어떻게 생각하는지, 누구에게 여러분의 메시지를 전달하고자 하는지에 대한 것입니다.

### 올바른 이름 짓기

기억하기 쉬운 이름을 짓고 프로젝트가 어떤 일을 하는지 알 수 있게 하는 것이 이상적입니다. 아래의 예시를 보세요.

* [Sentry](https://github.com/getsentry/sentry)는 충돌 보고를 위해 앱을 모니터링합니다.
* [Thin](https://github.com/macournoyer/thin)은 빠르고 간단한 Ruby 웹 서버입니다.

기존 프로젝트를 기반으로 하는 경우 그 이름을 접두사로 사용하면 프로젝트가 수행하는 작업을 쉽게 파악할 수 있습니다. 예컨대 [node-fetch](https://github.com/bitinn/node-fetch)는 `window.fetch`를 Node.js에 가져옵니다.

무엇보다 명확성을 고려하세요. 농담은 재미있지만, 어떤 농담은 다른 문화나 다른 경험을 가진 사람들에게는 이해되지 않을 수도 있음을 기억하세요. 잠재적인 사용자 중 일부는 회사 직원일 수 있습니다. 그들이 직장에서 여러분의 프로젝트를 설명하기 어렵게 만들고 싶지는 않을 것입니다!

### 이름 중복 피하기

[비슷한 이름의 오픈소스 프로젝트가 있는지 확인하세요](http://ivantomic.com/projects/ospnc/). 특히 동일한 언어 또는 같은 생태계를 공유하는 경우, 이름이 기존의 인기 있는 프로젝트와 겹치면 사람들이 헷갈려 할 것입니다.

웹 사이트, Twitter 핸들 또는 다른 속성이 프로젝트를 표현하기를 원한다면 원하는 이름을 사용할 수 있는지 확인하세요. 이상적으로는, 그 이름을 아직 사용할 생각이 없더라도 마음의 평화를 위해 [이름을 차지해 두는 것이 좋습니다](https://instantdomainsearch.com/).

프로젝트 이름이 상표를 침해하지 않는지 확인하세요. 회사 측에서 프로젝트를 중단하거나 법적 조치를 취할 것을 요구할 수 있습니다. 리스크를 부담할 가치는 없습니다.

[WIPO Global Brand Database](http://www.wipo.int/branddb/en/) 에서 상표명이 있는지 확인할 수 있습니다. 여러분이 회사에서 일을 하고 있다면 [법률팀이 도와줄 수 있을 것입니다](../legal/).

마지막으로, 프로젝트 이름을 구글에 검색해 보세요. 사람들이 프로젝트를 쉽게 찾을 수 있을까요? 검색 결과에 여러분이 원치 않는 것이 나타나지는 않나요?

### 당신의 글(과 코드)도 브랜드에 영향을 미칩니다!

프로젝트가 진행되는 동안 여러분은 README, 튜토리얼, 커뮤니티 문서, 이슈에 대한 답변, 뉴스레터 및 메일링 리스트까지 많은 글을 쓸 것입니다.

그것이 공식적인 문서든 평범한 이메일이든 여러분의 글 스타일은 프로젝트 브랜드의 일부입니다. 어떻게 청중에게 다가가야 좋을지, 여러분이 전달하고자 하는 어조는 무엇인지 고려하세요.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  I tried to be involved with every thread on the mailing list, and showing exemplary behaviour, being nice to people, taking their issues seriously and trying to be helpful overall. After a while, people stuck around not to only ask questions, but to help with the answering as well, and to my complete delight, they mimicked my style.
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source”](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

따뜻하고 포괄적인 언어(한 사람을 언급 할 때도 "그들"이라고 하듯)를 사용하면 이 프로젝트가 새로운 기여자에게 환영받는 느낌을 줄 수 있습니다. 많은 독자가 영어를 모국어로 사용하지 않을 수 있으므로 간단한 언어 사용에 충실하세요.

작문 스타일 뿐 아니라 코딩 스타일도 프로젝트 브랜드의 일부가 될 수 있습니다. [Angular](https://github.com/johnpapa/angular-styleguide)와 [jQuery](http://contribute.jquery.org/style-guide/js/)는 엄격한 코딩 스타일과 가이드라인을 가진 프로젝트의 두 가지 예입니다.

프로젝트를 시작할 때 스타일 가이드를 작성할 필요는 없으며, 여러분은 오히려 프로젝트에 여러 코딩 스타일이 혼재하는 것을 좋아할 수도 있습니다. 하지만 글과 코딩 스타일이 서로 다른 유형의 사람들을 끌어모으거나 단념시킬 수도 있다는 점을 예상해야 합니다. 프로젝트의 가장 초기 단계는 여러분이 원하는 선례를 만들 기회입니다.

## Your pre-launch checklist

프로젝트를 오픈소스화할 준비가 되셨습니까? 다음은 도움이 되는 체크리스트입니다. 모든 칸에 체크하셨나요? 이제 출발할 준비가 되었습니다! ["공개"를 클릭](https://help.github.com/articles/making-a-private-repository-public/)하고 등을 토닥이세요.

**문서**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    프로젝트에 오픈소스 라이선스가 적힌 LICENSE 파일이 있다.
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    프로젝트가 README, CONTRIBUTING, CODE_OF_CONDUCT 등 기본적인 문서를 갖추고 있다.
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    이름은 기억하기 쉽고, 프로젝트가 하는 일에 대한 아이디어를 제공하며, 기존 프로젝트와 충돌하거나 상표를 침해하지 않는다.
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    이슈 대기열이 최신 상태이며, 이슈는 깔끔하게 분류되고 라벨이 지정되어 있다.
  </label>
</div>

**코드**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    프로젝트가 일관된 코드 규칙을 사용하고 명확한 함수/메소드/변수 이름을 사용한다.
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    코드에 의도와 특수 상황을 담은 명확한 주석이 달려 있다.
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    커밋 내역, 이슈, PR에 암호나 비공개 정보 등의 민감한 자료가 없다.
  </label>
</div>

**사람**

여러분이 개인이라면 아래를 확인하세요.

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  (회사 직원인 경우) 법무 부서와 상담하고 회사의 IP 및 오픈소스 정책을 이해했다.
  </label>
</div>

여러분이 회사나 조직이라면 아래를 확인하세요.

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    법무 부서와 상담했다.
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    프로젝트 발표 및 홍보를 위한 마케팅 계획을 마련했다.
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    이슈에 답변하고 PR을 리뷰 및 병합하는 등 커뮤니티 상호 작용을 관리할 담당자가 있다.
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    최소 두 명 이상이 프로젝트 관리 권한을 갖는다.
  </label>
</div>

## You did it!

첫번째 프로젝트를 오픈소스화한 것을 축하합니다. 결과가 어떻든 공개적으로 작업하는 것은 커뮤니티에게 좋은 선물입니다. 모든 커밋, 댓글, PR을 통해 여러분은 여러분 스스로와 다른 사람들이 배우고 성장할 기회를 창출하고 있습니다.
