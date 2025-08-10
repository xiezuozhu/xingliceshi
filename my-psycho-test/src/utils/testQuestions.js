// 不同类型测试的题目数据

// 焦虑自评量表(SAS)题目
const sasQuestions = [
  { id: 1, text: '我觉得比平时容易紧张和着急', reverse: false },
  { id: 2, text: '我无缘无故地感到害怕', reverse: false },
  { id: 3, text: '我容易心里烦乱或觉得惊恐', reverse: false },
  { id: 4, text: '我觉得我可能将要发疯', reverse: false },
  { id: 5, text: '我觉得一切都很好，也不会发生什么不幸', reverse: true },
  { id: 6, text: '我手脚发抖打颤', reverse: false },
  { id: 7, text: '我因为头痛、颈痛和背痛而苦恼', reverse: false },
  { id: 8, text: '我感到容易衰弱和疲乏', reverse: false },
  { id: 9, text: '我觉得心平气和，并且容易安静地坐着', reverse: true },
  { id: 10, text: '我觉得心跳得很快', reverse: false },
  { id: 11, text: '我因为一阵阵头晕而苦恼', reverse: false },
  { id: 12, text: '我有晕倒发作，或觉得要晕倒似的', reverse: false },
  { id: 13, text: '我吸气呼气都感到很容易', reverse: true },
  { id: 14, text: '我的手脚麻木和刺痛', reverse: false },
  { id: 15, text: '我因为胃痛和消化不良而苦恼', reverse: false },
  { id: 16, text: '我常常要小便', reverse: false },
  { id: 17, text: '我的手脚常常是干燥温暖的', reverse: true },
  { id: 18, text: '我脸红发热', reverse: false },
  { id: 19, text: '我容易入睡并且一夜睡得很好', reverse: true },
  { id: 20, text: '我做恶梦', reverse: false }
];

// 抑郁自评量表(SDS)题目
const sdsQuestions = [
  { id: 1, text: '我觉得闷闷不乐，情绪低沉', reverse: false },
  { id: 2, text: '我觉得一天之中早晨最好', reverse: true },
  { id: 3, text: '我要哭或想哭', reverse: false },
  { id: 4, text: '我夜间睡眠不好', reverse: false },
  { id: 5, text: '我吃饭像平时一样多', reverse: true },
  { id: 6, text: '我的性功能正常', reverse: true },
  { id: 7, text: '我感到体重减轻', reverse: false },
  { id: 8, text: '我为便秘烦恼', reverse: false },
  { id: 9, text: '我的心跳比平时快', reverse: false },
  { id: 10, text: '我无故感到疲劳', reverse: false },
  { id: 11, text: '我的头脑像往常一样清楚', reverse: true },
  { id: 12, text: '我觉得经常做的事情并没有困难', reverse: true },
  { id: 13, text: '我觉得不安而平静不下来', reverse: false },
  { id: 14, text: '我对将来抱有希望', reverse: true },
  { id: 15, text: '我比平时容易生气激动', reverse: false },
  { id: 16, text: '我觉得作出决定是容易的', reverse: true },
  { id: 17, text: '我觉得自己是个有用的人，有人需要我', reverse: true },
  { id: 18, text: '我的生活过得很有意义', reverse: true },
  { id: 19, text: '我认为如果我死了别人会生活得好些', reverse: false },
  { id: 20, text: '我仍旧喜爱自己平时喜爱的东西', reverse: true }
];

// 一般人格测试题目（简化版）
const personalityQuestions = [
  { id: 1, text: '在社交场合中，我通常感到自在', dimension: '外向性', reverse: false },
  { id: 2, text: '我喜欢尝试新的事物', dimension: '开放性', reverse: false },
  { id: 3, text: '我容易相信他人', dimension: '宜人性', reverse: false },
  { id: 4, text: '我做事有条理，喜欢制定计划', dimension: '尽责性', reverse: false },
  { id: 5, text: '我经常感到焦虑或紧张', dimension: '神经质', reverse: false },
  { id: 6, text: '我喜欢成为关注的焦点', dimension: '外向性', reverse: false },
  { id: 7, text: '我对艺术和美学有浓厚兴趣', dimension: '开放性', reverse: false },
  { id: 8, text: '我乐于帮助他人', dimension: '宜人性', reverse: false },
  { id: 9, text: '我总是按时完成任务', dimension: '尽责性', reverse: false },
  { id: 10, text: '我容易受到压力的影响', dimension: '神经质', reverse: false }
];

export { sasQuestions, sdsQuestions, personalityQuestions };