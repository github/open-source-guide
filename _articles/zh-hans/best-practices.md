---
lang: zh-hans
title: 维护者最佳实践
description: 身为开源的维护者，如何轻松驾驭项目？本指南从文档流程到有效利用社区来展开。
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
redirect_from: /zh-cn/best-practices/
---

## 身为维护者意味这什么？

如果你维护着一个非常流行的项目，你可能就会意识到自己写代码的时间变少，而花费在回答 issue 的时间越来越多。

在项目的起步阶段，你会不断尝试着实现自己的新想法，也能够基于自己想要的作出决定。随着项目逐渐的开始流行，就会发现你的大部分时间都花在了与用户、贡献者打交道上。

维护项目需要的不仅仅是编码。有些意料之外的任务，对于项目的持续发展同样重要。我们收集了几种方法让你的维护工作变得稍轻松些，这些技巧，涉及范围颇广，从编写文档到管理社区都有所涉及。

## 流程文档化

对于一个项目的维护者来说写文档是最重要的事情之一。

文档不仅说清楚了你的想法是什么，而且还帮助别人在问问题之前理解你需要什么和接下在希望做什么。

将一些东西写下来，当遇到不符合项目预期的内容时，可以轻松的拒绝。同时，它对于人们的参与和提供帮助提供了指导。最有意思的是，撰写文档的人可能永远也不知道是谁读了他写的文档，或者使用项目。

即使你不想长篇大论，对要点略说一二也比啥都不写要好。

### 写下你的项目的发展方向

请在项目启动时就写下项目目标，并将之加到 README 文件中， 或者创建一个单独的 **VISION** 文件，其它还能帮助人们了解这方面的信息如项目管理路线图，最好是也把他们公开。

有一个明确的，用文档表达清晰的愿景，能保证项目的走向不会跑偏，同时也能保障因为其他的贡献者增加的奇怪的需求而使项目变质。

比如，@lord 发现项目有一个明确的愿景能够帮助他决定哪个 PR 值得花时间。作为一个维护者的新手，他甚至还后悔当他接到第一个关于 [slate](https://github.com/lord/slate)) PR 的时候没有坚持项目本身的原则。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  我一直都在摸索。我没有努力寻求一个完整的解决方案。与其采用那种半吊子办法，我真希望曾经对某些 Issue 的提出者说："我暂时没有时间干这个，但是我会把他放到我的待办事项中"。
  <p markdown="1" class="pquote-credit">
— @lord, ["开源项目维护者新手的几点技巧"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### 和大家交流你自己对项目的期望

制定规则是很伤脑筋的。有时候你可能觉得你像是在限制别人的行为或者说把好玩的东西都搞没了。

制定了规则，然后严格执行，当然啦，好的规则会让维护者更轻松。他们会把你从做自己不愿意做的事情中解脱出来。

大多数知道你项目的人对你或者你的处境都是一无所知。他们可能会觉得你做这个项目是有钱拿的，特别是你的项目是他们经常用的而且某种程度上有点依赖的时候。其实你只是在有时候会在项目上花很多时间，但是现在你在忙于新工作或者照顾刚出生的儿子。

这些都是再正常不过的事情！所以确保让别人也知道这些。

如果你维护某个项目是利用空闲时间或者完全自愿的，能花多少时间就花多少时间。而不是你觉得项目需要你花多少时间或者别人想让你花多少时间。

这里是一些值得你写进项目里的东西：

* 怎样的贡献才会被复查和接受（_需要测试吗？提 Issue 有模板吗？_）
* 你本人会接受什么类型的贡献？（_你是不是只希望在某些部分的代码上需要别人的帮助？_）
* 在合适的时候跟进项目（比如说 _如果你在七天之内没有收到 maintainer 的回复，而且依旧没有其它任何的响应，那么就直接找 Ta。_）
* 你会在这个项目上花多少时间（比如说 "_我们每星期只会在这个项目上花5个小时_"）

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs)、[CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules)、以及 [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) 均是为维护者和贡献者提供了很好的基本规则的项目，乃业内典范。

### 保证交流是公开进行的

不管是什么时候，保证你的交流是在公共的场所（就是大家都能看到的地方）。如果有人尝试和你私聊，哪怕是讨论一个新的需求或者功能，请礼貌的引导 Ta 到公共的交流场所，比如邮件列表或者 issue tracker。

如果你和别的维护者见面了，或者在私下做了一个很重要的决定，把这些信息告诉大家，即使只是把你的笔记发上去。

这样的话，每个人新加入到你们社区的人和已经呆了多年的人能够了解到的信息是一样的。

## 学会说不

把所有的事情都写下来，当然，对你执行你制定的规则的时候客观分析实际情况也有帮助。

拒绝别人确实不是很好玩，但是也要表现出专业程度，比如使用"你的贡献不符合这个项目的标准"而不是"我不喜欢你的贡献"这样显得粗鲁的语句。

作为一个维护者，在很多情况下，你都要拒绝别人：不符合项目规则的 PR, 某个人脱离了讨论的重点，给别人做无关紧要的工作等等。

### 保持友好沟通

你要学会拒绝的最重要的地方就是 Issue 和 PR 请求。作为一个项目的维护者, 你会不可避免的收到你不想接受的建议。

可能某个贡献并不在项目的范围或者和你的期望不合。又或者是可能想法很好，但是实现的却很烂。

不管是什么原因，在处理这些不符合项目标准的贡献的时候都要婉转。

如果你收到了你不想接受的贡献，你的第一反应可能是忽略或者假装没看到。但是这么做会严重伤害到别人而且可能会让你社区里的其他贡献者失去动力。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  管理大型开源项目的关键就是保证 issue 活跃。尽量避免让 issue 停滞不前。如果你是一个IOS开发者，你会知道<abbr title="提交问题到 Apple 的 Radar bug 跟踪系统">提交雷达</abbr>是多么让人沮丧。您可能会在2年后收到回复，并被告知要再次使用最新版本的iOS。
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["开源社区黑客增长"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

别因为自己感到内疚或者想做一个好人就把你不想接受的贡献继续保留。随着时间的流逝，这些你没有回答的 issue 和 PR 会让你觉得很不爽。

更好的方式是马上关掉你不想接受的贡献。 如果你的项目已经积压大量的问题，@steveklabnik 可以给你点儿建议，[如何高效的解决 issue](https://words.steveklabnik.com/how-to-be-an-open-source-gardener)。

第二点，忽略别人的贡献等于是在社区传递了一个负面的信号。让人感觉提交一个贡献是蛮恐惧的事情，尤其是对于刚加入的新手来说。即使你不接受他们的贡献，告诉他们为什么然后致谢。这会让人觉得更舒服。

如果你不想接受某个贡献：

* **感谢他们** 的贡献
* **解释为什么他们的贡献不符合** 项目的需求范围，然后提供清楚的建议以供改善，如果你可以的话。和蔼一点，但同时也要讲原则。
* **引用相关的文档，** 如果你有的话。如果你发现你反复收到你不想接受的贡献，把他们加到文档以免你重复叙述。

你不需要用超过 1-2 两句话来回复。比如，当一个[celery](https://github.com/celery/celery/)的用户报告了一个window相关的错误，@berkerpeksag 是[这么](https://github.com/celery/celery/issues/3383)回复的

![celery screenshot](/assets/images/best-practices/celery.png)

如果你感觉拒绝别人很不好意思，也很正常，其实很多人都是这样。就像 @jessfraz [说到的](https://blog.jessfraz.com/post/the-art-of-closing/):

> 我和很多来自诸如 Mesos, Kubernetes, Chromium 等不同开源项目的维护者交流过，他们都异口同声的觉得做一个维护者最难的就是拒绝你不想要的补丁。

对于不想接受别人的贡献这件事不要感到愧疚。如 [@shykes](https://github.com/shykes)[所说](https://twitter.com/solomonstre/status/715277134978113536)开源的第一原则就是 _"拒绝是暂时的，接受是永远的。"_ 当然啦，认同别人的热情还是一件好事，拒绝他的贡献和拒绝他这个人是两码事。（要做到对事不对人。）

最后，如果一个贡献不是够好，你没任何义务接受它。对那些想对你的项目做贡献的人保持和蔼和积极的态度，但是只能接受那些你确定会让你的项目变得更好的提交。你说拒绝的次数越多，对你来说拒绝别人就越容易。谨记！

### 保持主动

要想减少你不想接受的贡献的数量，首先，在你项目的贡献指南中解释如何提交贡献以及怎样的贡献会被接受。

如果你收到太多低质量的贡献，让那个贡献者先多做做功课，比如：

* 填写一个 issue 或者 PR 的模板/清单
* 在提交PR之前先开一个 issue

如果他们不遵从你的规则，马上关掉 issue 并引用你的文档。

当然啦，这么搞一开始是不太舒服，但是你主动一点确实对双方都好。它减少了某个人花了太多时间到一个你不想要的 PR 上的可能性。而且让你管理起来更轻松。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  理论上，在 CONTRIBUTING.md 文件里面告诉别人在他们开始干活之前如何更清楚的知道的干完之后会不会被接受。
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["优雅的关闭 PR "](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

有时候，当你说不的时候，你潜在的贡献者会感到对你的沮丧或者不爽。如果他们开始找你撕逼了，[采取必要的措施以应对局势](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items)或者干脆把他们从你的社区开除，如果他们不打算和你保持建设性的合作关系的话。

### 成为导师

可能在你的社区里有人不断提交一些不符合项目需求的贡献。对你们双方来说，不停的拒绝他的提交，会令双方都很尴尬。

如果你发现有人对你的项目很上心，但是就是需要调教，那就耐心一点。给他解释明白每次它的提交为什么不符合项目需求。尝试着让他先做一些简单一点的事，比如那些标有 _"good first issue"_ 标签的 issue，以此让他慢慢习惯。如果你有时间的话，考虑教 Ta 怎么完成第一次贡献，或者在社区找一个人教 Ta。

## 依托你的社区

你不需要凡事亲力亲为。这就是社区存在的原因！即使你没有一个活跃的贡献者社区，但是如果你有很多用户的话，拉他们来干活儿。

### 分担工作量

如果你正在寻找其他人来参与, 从身边的人开始。

当你看到新的贡献者不停的提交贡献，通过分配给他们更多任务来表示认可。如果别人愿意的话，记录下别人是怎么成长为领导者的过程。

鼓励别人来[一起管理项目](../building-community/#共享项目所有权)能很大程度上减轻你的工作量，就像 [@lmccart](https://github.com/lmccart) 在他的项目上做的那样，[p5.js](https://github.com/processing/p5.js)

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  我曾经说过，"对，每个人都可以参与进来，你不需要有很多编程的经验。"当有申请来参加我们的活动的时候，我就在想，这是真的吗，我说了啥？有将近40个人来了，我虽然不可能和每个人都单独交谈，但是大家一起来了，这说明我说的没错。只要有人知道怎么做了，他们就能教他们的邻居。
  <p markdown="1" class="pquote-credit">
—  @lmccart, [""开源" 意味着什么? p5.js 版"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

如果你需要暂时或者永久的离开项目，请找人来代替你，这并没有什么不好意思。

如果别人认同项目的发展方向，给他们提交的权限或者正式把项目所有权转移给他。如果有人 fork 了你的项目而且在保持活跃的维护中，考虑在你的原始的仓库放上这个 fork 版本的链接。如果大家都希望你的项目继续的话这不失为一种好办法。

[@progruim](https://github.com/progrium) [发现](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) 由于它给他的项目[Dokku](https://github.com/dokku/dokku)写一个关于项目发展方向的文档，即使在它离开这个项目后他的那些目标仍然会被实现。

> 我写了一个wiki来描述我想要啥和为什么。不知道为啥，项目的维护者就开始推动项目朝这个方向发展，这对我来说还是有点惊讶的。他们会丝毫不差的按照我的意愿去做这个项目吗？不总是这样，但是总是会把项目推动到离我的理想状态更近的位置。

### 让别人尝试他们自己想要的解决方案

如果有贡献者关于项目有不同的意见，你可以礼貌的鼓励它在他自己 fork 版本上继续工作。

fork 一个项目不什么坏事情。能复制并且修改别人的代码是开源项目最大的好处之一。鼓励你的社区成员在他自己 fork 的仓库上继续工作，这是在不和你的项目冲突的基础上，给实现他们的想法最好的出口。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  我迎合 80% 的用户需求。但是如果你是那 20% 中的一个，那么 fork 我的项目吧。我不会介意的！我的公开的项目是用来解决那些最常见的问题的。我尝试着让别人fork 我的项目然后在上面拓展得更加简单。
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["为何我关闭了 PR"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

这对于那些强烈的需要某个你没时间实现的解决方案的用户来说也是一样的。提供 API 或者自定义的钩子帮助他们更好的实现自己的需求而不需要改动源码。[@orta](https://github.com/orta)[发现](https://artsy.github.io/blog/2016/07/03/handling-big-projects/)鼓励在 CocoaPods 上使用插件导致了很多有趣的想法的诞生。

> 一旦一个项目变大之后，维护者对怎么增加新代码变得保守是不可避免的事情。你可能很会拒绝别人的需求，但是很多人提的都是合法的需求。所以，你不得不把你的一个工具变成平台。

## 使用机器人

就像很多工作别人可以帮你做一样，也有很多工作不需要人来做。因为有机器可以替代人工，尤其是那些重复、无聊的工作，用好它们能够让你的维护生活变得更容易。

### 引进测试和别的检查来改善你的代码质量

让你项目自动化的最重要的方法之一就是引进测试。

测试能够帮助贡献者自信他们没有弄坏什么。测试也让你复查代码和接受别人的贡献的过程更加容易。你反应的越多，社区参与的就越多。

设置自动化的测试让所有新来的贡献者都可用，而且保证你的测试可以很容易在贡献者的本地运行。保证所有的代码贡献者在提交之前都运行你的测试。你还得为所有的提交设置一个基本的标准。

如果你添加了测试，确保在 CONTRIBUTING 文件里面解释他们是怎么工作的。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  我相信测试对所有的代码都是需要的。如果代码被完整的覆盖了测试，以后就不需要改了。我们只需要在代码崩溃或者需要某个功能的添加代码。不管你在修改什么，测试对于检查那些你可能不小心制造的问题都是必须的。
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust 社区的自动化"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### 用工具来自动化日常的维护工作

对于维护一个流行的项目来说，一个好消息是别的维护者也可能遇到过类似的问题而且已经找到一个解决方案。

这里有[各种各样的工具](https://github.com/integrations)帮你自动化一部分的维护工作。这里仅列举一些常见的例子：

* [semantic-release](https://github.com/semantic-release/semantic-release) 自动化版本发布
* [mention-bot](https://github.com/facebook/mention-bot) 可能的贡献者来帮你复查代码
* [Danger](https://github.com/danger/danger) 帮你自动复查代码

对于 bug 报告和其他常见形式的贡献，GitHub 有[Issue 模版和 Pull Request 模版](https://github.com/blog/2111-issue-and-pull-request-templates), 你可以用来降低沟通成本。你也可以设置[邮件过滤](https://github.com/blog/2203-email-updates-about-your-own-activity)来管理你的邮件提醒。

如果你想更加的先进和高效，代码风格指南和 linter 能让你项目收到的贡献更加规范，而且更容易复查和被接受。

当然啦，如果你的标准太复杂了，反倒会增加了贡献的难度。所以保证你只添加那些让每个人工作起来更容易的规则。

如果你不确定用什么工具，看一看别的流行项目是怎么做的，特别是和你在一个生态系统的。比如，其他的 Node 模块的贡献流程是怎么样的？用相似的工具和方法，能够让你项目的贡献流程对于开发者来说是很熟悉的。

## 不干了也没关系

开源项目曾经让你开心，但可能现在开始让你不开心了。

可能当你想到你的项目的时候感觉到"亚历山大"。而同时，issue 和 PR 又纷至沓来。

疲倦在开源工作工作中是一个常见的问题，特别是在维护者中间。作为一个维护者，你做的开心对项目的生存来说是一个没有商量余地的条件。

虽然你不需要跟谁请假，但是也不要拖到自己疲倦不堪的时候才去度假。[@brettcannon](https://github.com/brettcannon)，一个 Python 的核心开发者，决定在 14 年的义务劳动之后[休一个月的假](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering)。

就像其他工作一样，有规律的休息会让你对工作保持舒适愉快的心情。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  我是 WP-CLI 的维护者，我发现我需要首先让自己开心，在开源项目和其他事情之间设定清楚的界限。我发现最好的平衡点就是每周在日常的工作安排中花 2-5 小时在这上面。这会让我从感觉太累到保持持续的激情。因为我给我需要解决的 issue 标上了优先级，从而我能够在我认为重要的事情上有所进展。
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["我的悼文，你现在是一个非常流行的项目的维护者"](https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

有时候，当你感觉大家都离不开你的时候，请假去休息是一件蛮困难的事情。甚至你自己会因为离开而感到愧疚。

在你离开项目的时候尽可能的在用户和社区中间寻求支持，如果你找到支持你的人，还是休息吧。在你不工作的时候还是要保持和别人交流，这样人们不会因为你的失联而感到奇怪。

休假不仅适用于度假。如果你周末不想做开源项目的工作了，或者在本该工作的时候不想干活了，和别人说，这样他们知道什么时候不该打扰你。

## 不必事必躬亲

维护一个大型项目时，相比早期的增长阶段，是需要更多的不一样的技能，作为一个维护者，你会将自己的领导力和个人能力提高一个层次，而这是很少人能体会的到的。但是与此同时，要挑战管理项目，以及设定清晰的界限。只做你感到舒服的事情，能够让你保持开心、活力和高产的状态。
