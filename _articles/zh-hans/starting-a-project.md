---
lang: zh-hans
title: 开启一个开源项目
description: 从开源的世界汲取智慧，然后开始准备着手发起开源项目。
class: beginners
order: 2
image: /assets/images/cards/beginner.png
related:
  - finding
  - building
redirect_from: /zh-cn/starting-a-project/
---

## 什么是开源,为什么要开源

那你在考虑开始参与开源？恭喜！世界赞赏你的贡献。我们来谈谈开源是什么以及为什么人们这样做。

### "开源"是什么意思？

当一个项目被开源，这意味着**任何人都可以出于任何目的查看，使用，修改和分发你的项目**。 这些权限通过[开源许可](https://opensource.org/licenses)强制实施。

开源是强大的，因为它降低了事物被采纳的障碍，允许想法迅速传播。

要了解它的工作原理，想象你的朋友组织了一场聚餐，而你带去了一个樱桃派。

* 每个人都尝了那个派（_使用_)
* 派的味道棒极了！大家请你分享它的配方（_view_）
* 一个叫 Alex 的朋友是个糕点师，他建议少放点糖（_modify_）
* 一个叫 Lisa 的朋友想要用它作为下周的晚餐（_distribute_）

相比之下，一个闭源过程就像去一家餐厅订购一个樱桃派。你必须为了吃饼支付费用，餐厅恐怕不会给你他们的食谱。如果你准确地复制了他们的馅饼，并以你自己的名义出售，餐厅可以对你采取措施。

### 人们为什么把他们的作品开源？

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
我从开源使用和协作中获得的最有价值的经验之一，就是在我面临许多与其他开发人员相同问题的过程中所建立的联系。
  <p markdown="1" class="pquote-credit">
    — @kentcdodds, ["参与开源对我来说太棒了"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

个人或组织为何想要开源一个项目，[有各种各样的的原因](https://ben.balter.com/2015/11/23/why-open-source/)，例如：

* **协作：** 开源项目可以接受世界各地人们的修改。 例如 [Exercism](https://github.com/exercism/) 就是一个拥有350多个贡献者的练习平台。

* **采用和重组：** 任何人几乎可以出于任何目的使用开源项目。人们甚至可以使用它来构建其他东西。例如，[WordPress](https://github.com/WordPress) 就是派生自一个名为 [b2](https://github.com/WordPress/book/blob/HEAD/Content/Part%201/2-b2-cafelog.md) 的现有项目。

* **透明度：** 任何人都可以检查开源项目是否有错误或不一致。 透明度对[保加利亚](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) 或[美国](https://sourcecode.cio.gov/)等政府，银行或医疗保健等受监管行业以及 [Let's Encrypt](https://github.com/letsencrypt) 等安全软件都很重要。

开源并不仅仅限于软件。您可以开源任何事物，从数据集到书本。查看 [GitHub Explore](https://github.com/explore) 开找找有什么是你可以开源的。

### 开源是指"免费"吗？

开源最大的吸引之一是它不花钱。 但是，"免费"只是开源的总体价值的一个副产品。

因为[开源许可证要求](https://opensource.org/osd-annotated)任何人可以几乎出于任何目使用，修改和共享您的项目，项目本身往往是免费的。 如果该项目花钱使用，任何人也都可以合法地复制和使用免费版本。

因此，大多数开源项目是免费的，但"免费"不是开源定义的一部分。 有些方法可以通过双重许可或有限功能间接地为开源项目收费，同时仍然遵守开源的官方定义。

## 我应该启动自己的开源项目吗？

简单来说，答案是肯定的，因为无论结果如何，启动您自己的项目来了解开源的工作原理是一个好方法。

如果你从来没有创建过一个项目，你可能会担心人们会说什么，或者是否有人会注意到。 如果这听起来像你现在的状态，别担心，你并不孤独！

开源工作就像任何其他充满创意的活动，无论是写作还是绘画。 向世界分享你的作品会让你提心吊胆，但唯有练习能够让你的感觉变好的方法 - 即使你没有观众。

如果你还不确信，请花一点时间思考你的目标可能是什么。

### 设置你的目标

目标可以帮助你弄清该做什么，不应该说什么，以及你在哪方面需要其他人的帮助。 首先问自己，_我是为什么开源这个项目？_

这个问题没有标准答案。 对于一个项目你可以有多个目标，或者具有不同目标的不同项目。

如果你唯一的目标是炫耀你的工作，你甚至可能不需要他人的贡献，甚至在你的 README 中说明这点。但另一方面，如果你需要贡献者，你会投入时间来使文档清晰，好让新的参与者感到欢迎。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
在某些时候，我创建了一个自己正在使用的自定义 UIAlertView，我决定将它开源。所以我修改它使其更有活力，并把它上传到了 GitHub。我还写了我的第一个文档，解释给其他开发人员如何在他们的项目中使用它。很可能没有人会去使用它，因为它是一个简单的项目，但我的贡献让我感觉很好。
  <p markdown="1" class="pquote-credit">
— @mavris, ["自学的软件开发者：为什么开源对我们那么重要"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

随着你的项目增长，你的社区可能不仅需要你的代码。回应问题，审查代码和传播你的项目都会成为开源项目中的重要任务。

而你在非编码的任务上花费的时间将取决于项目的大小和范围，你应该准备好作为维护者来自己解决或找人帮助你。

**如果你是公司开源项目的一部分，** 确保你的项目有它需要茁壮成长的内部资源。 你需要确定谁在启动后负责维护项目，以及如何与你的社区共享这些任务。

如果你需要专门的预算或人员来促进，操作和维护项目，请尽早提出。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
当你开始开源一个项目时，确保您的管理流程考虑到您项目周围社区的贡献和能力很重要。不要害怕让那些没有在你的企业中受雇的贡献者参与项目的关键部分 - 尤其如果他们是频繁的贡献者的话。
  <p markdown="1" class="pquote-credit">
— @captainsafia, ["所以你想开源一个项目，是吗？"](https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### 加入其他项目

如果你的目标是学习如何与他人合作或了解开源的工作方式，请考虑为现有项目做出贡献。从你已经使用并喜欢的项目开始。像修复拼写错误或更新文档简单的事也能为项目做出贡献。

如果你不知道如何开始作为贡献者，请查看我们的[如何贡献开源指南](../how-to-contribute/)。

## 发起你自己的开源项目

即使你没有很好的时间来开源你的工作。你也可以开源一个想法，正在进行中的工作，或是关闭了多年的源码。

一般来说，如果你乐意于他人对你工作的查看和反馈，你就应该开源你的项目。

无论您决定开展项目的哪个阶段，每个项目都应包括以下文档：

* [Open source license](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Contributing guidelines](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Code of conduct](../code-of-conduct/)

作为维护者，这些组件将帮助你交流你的期望，管理贡献并保护每个人的合法权益（也包括您自己的）。他们能够大大增加你积极体验的机会。

如果您的项目在 GitHub 上，则将这些文件放在您的根目录中，并使用推荐的文件名将有助于 GitHub 识别并自动将其显示给读者。

### 选择一个许可证 (license)

开源许可证保证其他人可以使用，复制，修改和贡献给您的项目，而不会产生不良后果。 它也可以保护您免受繁琐的法律影响。**启动开源项目时，请务必包含许可证。**

法律工作是非常无趣的。但好消息是，您可以将现有许可证复制并粘贴到存储库中。只需要花这么一点时间，就能保护你的辛苦工作。

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/),  和 [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) 都是非常流行的开源许可证， 但你可以选择[其他选项](https://choosealicense.com).

当你在GitHub上创建新项目时，你可以选择许可证。包括开源许可证将使你的GitHub项目成为开源。

![挑选一个许可证](/assets/images/starting-a-project/repository-license-picker.png)

如果您在管理开放源码项目的法律方面有其他问题或疑虑，我们已经[在这里](../legal/)介绍了。

### 撰写自述文件

自述文件不仅仅是用于说明如何使用你的项目。他们还可以解释你的项目为什么重要，以及它可以为你的用户做什么。

在您的自述文件中，尝试回答以下问题：

* 这个项目做什么？
* 为什么这个项目有用？
* 如何开始？
* 如果需要，我可以在哪里获得更多的帮助？

您可以使用自己的README回答其他问题，例如处理贡献，项目的目标以及许可证和归属信息。 如果您不想接受他人的贡献，或者您的项目尚未准备好作为产品提供使用，请将这些信息写下来。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
更好的文档意味着更多的用户，更少的求助和更多的贡献者，等等。要记住你的读者不是你自己。来到项目中的每个人可能有着截然不同的经历。
  <p markdown="1" class="pquote-credit">
— @tracymakes, ["这样写给他人看（视频）"](https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

有时，人们会因为觉得项目未完成而不愿意撰写 README，或者他们不希望做出贡献。这些都是写一个 README 的很好的理由。

想要获得更多灵感，请尝试使用 @18F 的 ["让 README 可读"](https://pages.18f.gov/open-source-guide/making-readmes-readable/) 或者 @PurpleBooth 的 [README 模板](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) 来撰写一个完整的 README。

当你在根目录中包含一个 README 文件时，GitHub 会自动将其显示在存储库的主页上。

### 编写你的贡献指南

贡献文件 (CONTRIBUTING file) 告诉你的受众如何参与你的项目. 例如，你可以包括一下信息:

* 如何提交错误报告（尝试使用[issue 和 pull request 模板](https://github.com/blog/2111-issue-and-pull-request-templates)）
* 如何建议一个新功能
* 如何配置你的环境和运行测试

除了技术细节， 贡献文件也是一个供你传达对贡献期待的机会， 例如：

* 你在寻求的贡献类型
* 你项目的路线图或者版本
* 贡献者应该（或者不应该）如何与你取得联系

使用热情友好的语气并提供具体的贡献建议（例如编写文档或者搭建网站）可以大大提高新人的参与度。

例如，[Active Admin](https://github.com/activeadmin/activeadmin/) 以这样的方式开始[它的贡献指南](https://github.com/activeadmin/activeadmin/blob/HEAD/CONTRIBUTING.md)：

> 首先， 非常感谢你考虑为 Active Admin 贡献帮助。正是你这样的人使 Active Admin 成为一个很棒的工具。

在你项目开始的初期，你的贡献文件可以很简单。你应该经常解释如何提交错误和文件问题，以及关于如何作出贡献的技术问题（例如测试）。

随着时间的推移，你可以将其他常见问题添加到贡献文件中去。写下这些信息意味着问你相同问题的人会越来越少。

想要获得更多有关编写贡献文件的方式，请查阅 @nayafia 的 [贡献指南模板](https://github.com/nayafia/contributing-template/blob/HEAD/CONTRIBUTING-template.md) 或者 @mozilla 的 ["如何构建 CONTRIBUTION.md"](https://mozillascience.github.io/working-open-workshop/contributing/)。

在你的 README 中链接你的 CONTRIBUTING，这样更多人就能看到他。如果你[在你的项目中放入了 CONTRIBUTING 文件](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)，当一个贡献者创建 issue 或者开启一个 pull request 时，GitHub 会自动链接你的文件。

![贡献指南](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### 建立行为规范

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  我们都有过这样的关于重复劳动的经验，无论是维护者试着解释为什么某些事物必须通过某种明确的方式执行，或者是用户...提出一个简单的问题。行为规范成为一个便利的参考和可链接的文档标明你的团队会认真对待具有建设性的讨论。
  <p markdown="1" class="pquote-credit">
— @mlynch, ["让开源成为一个有趣的地方"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

最后，行为准则有助于为项目参与者的行为设定基本规则。这在你为社区或者项目推出一个开源项目的时候尤为有价值。一份行为帮助你促进健康，有建设性的社区行为，这也会减轻你作为维护者的压力。

更多信息，请参见 [行为规范指导](../code-of-conduct/)。

除了传达你期待参与者**如何**行动，行为规范也倾向于描述这些期待针对谁，适用于何时，以及对于违规行为的处理方法。

就像开源许可证一样，有现成的行为规范，所以你不必自己编写。[贡献者公约](https://www.contributor-covenant.org/)是一个行之有效的行为规范，已经被用在[超过4000个开源项目](https://www.contributor-covenant.org/adopters)，包括 Kubernetes，Rails，以及 Swift。无论你使用哪一种，你都应该准备好在必要时执行行为规范。

将文本直接粘贴到项目存储库中的 CODE_OF_CONDUCT 文件中。将文件保存在项目的根目录中，以便轻松找到，并从 README 中链接到它。

## 项目命名以及品牌建设

品牌不仅是一个华丽的logo或者易记的项目名。它还关于你如何谈论你的项目，以及你想把信息传递给谁。

### 选择正确的名字

选择一个容易记住，有创意，能表达项目用意的名字。例如：

* [Sentry](https://github.com/getsentry/sentry) 监控应用程序的崩溃报告
* [Thin](https://github.com/macournoyer/thin) 是一个简单快速的Ruby web服务器。

如果你的项目是基于一个已存在的项目创建，那么使用他们的名字作为你项目名的前缀会帮助你阐述你项目的用途。 (例如 [node-fetch](https://github.com/bitinn/node-fetch)将`window.fetch` 添加到了 Node.js)。

考虑阐明所有。押韵虽然有趣，但是记住玩笑不可能转变成其它的文化，或者他人与你有不同的经历。你的一些潜在用户可能是公司员工，你不能让他们在工作中很难解释你的项目！

### 避免命名冲突

[查看是否有同名的开源项目](http://ivantomic.com/projects/ospnc/)，尤其是你分享的是同样的语言或者生态系统。如果你的名字与一个已存在的知名的项目有冲突，你会让你的粉丝感到困惑。

如果你想要一个网站，Twitter账号或者其他特性来展示你的项目，先确保你能得到你想要的名字。理想情况下，为了美好的未来[现在保留这些名字](https://instantdomainsearch.com/)，即使你现在不想用他们。

确保你的项目名没有侵权。如果有侵权，可能会有公司要求你的项目下架，或者对你采取法律措施。这样得不偿失。

 你可以查阅[WIPO全球品牌数据库](http://www.wipo.int/branddb/en/)避免商标冲突。如果你是在公司工作，[法律团队会帮你做这件事](../legal/)。

最后，去谷歌搜索你的项目名。大家会很容易地找到你的项目吗？在搜索结果里是否有你不想让大家看到的东西？

### 你的写作（和代码）如何影响你的品牌

在项目的整个生命周期中，你需要做很多文字工作：READMEs，教程，社区文档，回复issues，甚至肯能要处理很多来信和邮件。

是否是官方文档或者一封普通的邮件，你的书写风格都是你项目品牌的一部分。考虑你可能会拥有粉丝，以及这是你想传达的声音。

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  我尝试处理每一个细节，包括：处理邮件，展示示例，友好待人，认真处理大家的issues以及试图帮助到大家。经过一段时间后，大家可能不再是只问问题，还会帮助我解决其他人的疑问以及给我喜悦，他们模仿我的风格。
  <p markdown="1" class="pquote-credit">
— @janl on [CouchDB](https://github.com/apache/couchdb), ["Sustainable Open Source"](https://web.archive.org/web/20200723213552/https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

使用热情，通俗易懂的语言（如"他们"，即使是指一个人）能够让新来的贡献者感觉项目非常欢迎他们。使用简单的语言，因为你的读者可能英语不是很好。

除了书写风格外，你的编码风格也是你项目品牌的一部分。 [Angular](https://github.com/johnpapa/angular-styleguide) 和 [jQuery](https://contribute.jquery.org/style-guide/js/)是两个项目代码风格严谨的示例和指南。

当你的项目才开始时，没有必要为项目编写一份风格指南。你可能会发现你喜欢将不同的编码风格融入到项目。但是你应该想到你的书写和编码风格会吸引或者拒绝不同类型的人。项目的早期是你建立你希望看见的先例的机会。

## 发布项目之前的检查项

准备好开源你的项目了吗？有一份帮助检查清单。检查所有内容？你准备开始吧！ [点击 "publish"](https://help.github.com/articles/making-a-private-repository-public/) 以及拍下自己的后背。

**文档**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    需要为项目指定一个开源协议
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    项目要有基础文档 (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    易记的项目名，指出项目是做什么的，不能和已存在的项目冲突或者商标侵权
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    最新的issue队列，组织和标记清除的issues
  </label>
</div>

**代码**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    项目使用一致的代码风格和明确的功能/方法/可用的名字
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    注释清晰的代码，记录意图和边缘案例
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    在修改历史，issues或者 pull requests 中没有敏感的信息 (例如 密码或者其他不能公开的信息)
  </label>
</div>

**人**

如果你是代表个人：

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
  你已经告诉了你的法律部门，以及/或者理解了你公司（如果你是某一家公司的员工）的开源政策和IP
  </label>
</div>

如果你有一家公司或者组织：

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    你已经告诉了你的法律部门
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    你有一个宣布和促进项目的营销计划
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    一些人被允许管理社区互动（回复issues，检查和合并pull requests）
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    至少有两人管理访问项目
  </label>
</div>

## 你做到了!

恭喜你开源了你的首个项目。不论结果如何，对开源社区都是一份礼物。随着每次commit,comment和pull request，你正在为自己或者他人创造学习和成长的机会。
