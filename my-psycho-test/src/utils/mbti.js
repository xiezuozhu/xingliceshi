// MBTI测试评分工具

// MBTI类型描述
const mbtiTypes = {
  ISTJ: {
    name: 'ISTJ - 守序执行者',
    keywords: '踏实、可靠、细致、责任感强',
    description: 'ISTJ 是典型的责任担当型人格，他们重视秩序和规则，做事有条不紊，不轻易承诺，但一旦承诺便全力以赴。面对任务，他们更依赖经过验证的方法而非冒险尝试。虽然在社交场合可能显得内敛，但他们的稳重常常让团队成员感到安心。他们喜欢在熟悉的环境中工作，注重细节，并且不惧重复性工作。',
    careers: '审计、法律、工程管理、数据分析、行政管理、质量检验',
    relationships: '重视长期稳定的关系，不会轻易向人敞开心扉，但一旦建立信任，就会非常忠诚和支持对方。'
  },
  ISFJ: {
    name: 'ISFJ - 温柔守护者',
    keywords: '体贴、耐心、细致、奉献精神',
    description: 'ISFJ 擅长观察他人的需求，并给予细致的关怀。他们善于倾听，能够在细节中察觉情绪变化，是温暖可靠的伙伴。他们不喜欢冲突，倾向于用温和的方式维系关系。在工作中，他们注重责任和稳定性，愿意付出额外的努力去帮助他人达成目标。',
    careers: '护理、教育、心理辅导、人力资源、档案管理、客户服务',
    relationships: '在关系中表现出高度的忠诚与照顾，往往会优先考虑对方的感受。'
  },
  INFJ: {
    name: 'INFJ - 深思引导者',
    keywords: '洞察、理想主义、同理心、战略眼光',
    description: 'INFJ 有着强烈的使命感和价值观，他们能看到他人未曾察觉的深层原因，并善于从长远角度规划行动。他们追求有意义的目标，不满足于表面成就。虽看似安静，但他们的内心世界充满热情与信念，常常成为团队中富有启发性的人物。',
    careers: '心理咨询、战略规划、作家、教育顾问、非营利组织管理',
    relationships: '重视深层次的情感交流，不喜欢浅层的寒暄，倾向于与少数人建立深厚联系。'
  },
  INTJ: {
    name: 'INTJ - 策略规划者',
    keywords: '果断、目标导向、独立思考、前瞻性',
    description: 'INTJ 善于制定长期战略，他们对效率和成果有极高的要求，喜欢将复杂问题拆解成可执行的步骤。他们在逻辑推理和系统思维方面表现出色，习惯独立工作，不惧挑战权威。虽然在人际交往中可能显得疏离，但这是他们专注于目标的自然结果。',
    careers: '企业战略、科研、系统分析、建筑设计、项目管理',
    relationships: '倾向于与志同道合的人建立联系，尊重对方的独立性，也希望对方尊重自己的空间。'
  },
  ISTP: {
    name: 'ISTP - 冷静实干者',
    keywords: '务实、动手能力强、适应力高、行动导向',
    description: 'ISTP 喜欢通过实践解决问题，他们不惧未知，善于在变化中寻找机会。他们偏爱直接的体验和动手操作，通常在紧急或不确定的环境中保持冷静。他们不喜欢被过多规则束缚，更愿意用灵活的方法应对挑战。',
    careers: '机械维修、应急救援、技术支持、探险、运动训练',
    relationships: '在关系中重视自由与空间，不喜欢情感上的束缚，但会在关键时刻给予实际的帮助。'
  },
  ISFP: {
    name: 'ISFP - 自由艺术家',
    keywords: '温柔、敏感、审美感强、自由随性',
    description: 'ISFP 享受当下的美好，拥有敏锐的感官和艺术感受力。他们不喜欢被逼迫或控制，更倾向于以自己的节奏生活。他们安静但真诚，愿意为他人付出，但不喜欢引人注目。',
    careers: '设计、美术、摄影、音乐、手工艺、园艺',
    relationships: '温柔体贴，避免冲突，倾向于用行动表达关心而非言语。'
  },
  INFP: {
    name: 'INFP - 理想主义者',
    keywords: '真诚、共情力强、价值驱动、创造力',
    description: 'INFP 以价值观为行动指南，追求真实和意义。他们对世界充满想象和理想，善于在细微之处发现美好，并渴望通过创造或帮助他人让世界变得更好。他们重视内心感受，可能在现实与理想之间反复权衡。',
    careers: '作家、心理咨询、社会工作、文化创意、艺术创作',
    relationships: '在关系中追求深度和真诚，不在意表面礼节，更在乎情感的共鸣。'
  },
  INTP: {
    name: 'INTP - 思维探索者',
    keywords: '好奇、逻辑、分析能力强、思想开放',
    description: 'INTP 喜欢探究事物的本质，对理论和系统有天生的兴趣。他们擅长抽象思考，常常跳出常规寻找新思路。虽然不太关注日常细节，但在感兴趣的领域可以投入极大精力。他们偏好独立研究，讨厌僵化的规则。',
    careers: '研究员、数据科学、软件开发、发明设计、学术工作',
    relationships: '不善寒暄，但在志趣相投的人面前会展现幽默与深度。'
  },
  ESTP: {
    name: 'ESTP - 行动派实干家',
    keywords: '果断、灵活、冒险精神、直觉反应快',
    description: 'ESTP 喜欢直接投入行动，他们善于在瞬息万变的环境中做出快速决策。他们热衷体验新鲜事物，敢于冒险，也能在紧张情境下保持冷静。他们以结果为导向，讲求效率和实用性。',
    careers: '销售、运动员、急救人员、创业、谈判专家',
    relationships: '在关系中充满活力和感染力，喜欢和伴侣一起探索新体验。'
  },
  ESFP: {
    name: 'ESFP - 活力表演者',
    keywords: '热情、乐观、即兴、社交能力强',
    description: 'ESFP 享受当下，擅长营造轻松愉快的氛围。他们喜欢与人互动，乐于分享自己的喜悦和发现。他们灵活应变，善于用幽默化解尴尬，偏好体验式学习而不是枯燥的理论。',
    careers: '表演艺术、市场推广、活动策划、导游、餐饮与服务行业',
    relationships: '在关系中热情直接，倾向于用行动和陪伴表达爱意。'
  },
  ENFP: {
    name: 'ENFP - 热情创意家',
    keywords: '好奇心旺盛、想象力、感染力强、价值驱动',
    description: 'ENFP 是天生的点子制造机，他们在新事物中寻找灵感，喜欢与各种人交流以激发创意。他们不喜欢一成不变，渴望不断探索与尝试。虽然热情多变，但他们对真正认同的理念会持之以恒。',
    careers: '创业、广告创意、公共关系、教育培训、非营利组织',
    relationships: '情感表达丰富，注重精神契合，喜欢一起成长的伴侣。'
  },
  ENTP: {
    name: 'ENTP - 机智辩论家',
    keywords: '聪明、反应快、创意驱动、挑战常规',
    description: 'ENTP 喜欢从不同角度看问题，擅长发现机会和漏洞。他们热衷辩论和思维碰撞，能在动态环境中快速制定策略。他们乐于挑战现状，但有时容易分心，缺乏后续执行的耐心。',
    careers: '创业、市场分析、媒体评论、法律辩护、创新咨询',
    relationships: '互动中充满趣味与刺激，喜欢与伴侣一起探索未知领域。'
  },
  ESTJ: {
    name: 'ESTJ - 高效管理者',
    keywords: '务实、组织力、果断、责任感',
    description: 'ESTJ 重视规则和秩序，擅长制定计划并确保执行到位。他们讲究效率，对细节和流程有高度掌控力。他们适合担任领导职位，通过清晰的指令和标准管理团队。',
    careers: '行政管理、军警、运营管理、项目执行、法律执行',
    relationships: '在关系中注重稳定与承诺，希望对方与自己共享价值观。'
  },
  ESFJ: {
    name: 'ESFJ - 社交协调者',
    keywords: '友善、周到、团队意识、服务精神',
    description: 'ESFJ 关心他人感受，擅长在团队中协调关系。他们乐于为他人提供支持，并努力营造和谐氛围。他们喜欢遵循社会规范和传统，常在社区和家庭中担任核心角色。',
    careers: '教师、社区服务、客户管理、活动组织、医疗护理',
    relationships: '喜欢关心伴侣的日常生活，并期待对方的情感回馈。'
  },
  ENFJ: {
    name: 'ENFJ - 鼓舞领袖',
    keywords: '富有同理心、组织力、鼓舞人心、责任感',
    description: 'ENFJ 善于激励他人，能够洞察团队成员的潜力并帮助他们成长。他们常扮演协调者和推动者的角色，既有战略眼光又有细致的执行力。他们对关系和谐度敏感，倾向于维护集体利益。',
    careers: '领导力培训、心理辅导、公共演讲、教育管理、人力资源',
    relationships: '在关系中热情投入，愿意为伴侣的成长付出大量精力。'
  },
  ENTJ: {
    name: 'ENTJ - 枭雄统帅',
    keywords: '目标导向、战略思维、果断、领导力强',
    description: 'ENTJ 是天生的领导者，他们善于制定宏大目标并调动资源达成它。他们不怕做出艰难决策，喜欢在竞争中取胜。他们效率至上，有时可能忽略细节或他人的情绪。',
    careers: '企业高管、战略顾问、创业者、项目总监、投资管理',
    relationships: '在关系中直率坦诚，欣赏同样独立且有抱负的伴侣。'
  }
};

// MBTI测试题库
const mbtiQuestions = [
  { id: 1, text: '我在热闹的环境中会更有活力', dimension: 'EI', direction: 'E', reverse: false },
  { id: 2, text: '我更喜欢深入思考而不是立刻参与讨论', dimension: 'EI', direction: 'I', reverse: false },
  { id: 3, text: '与陌生人交谈让我感到兴奋', dimension: 'EI', direction: 'E', reverse: false },
  { id: 4, text: '长时间独处会让我感到舒适', dimension: 'EI', direction: 'I', reverse: false },
  { id: 5, text: '在聚会中我会主动接近别人', dimension: 'EI', direction: 'E', reverse: false },
  { id: 6, text: '人多的地方让我感到精力被消耗', dimension: 'EI', direction: 'I', reverse: false },
  { id: 7, text: '我喜欢在社交场合成为焦点', dimension: 'EI', direction: 'E', reverse: false },
  { id: 8, text: '我更倾向于一对一的深入交流', dimension: 'EI', direction: 'I', reverse: false },
  { id: 9, text: '当我长时间独处时会感到孤单', dimension: 'EI', direction: 'E', reverse: false },
  { id: 10, text: '我通常避免与不认识的人交谈', dimension: 'EI', direction: 'I', reverse: false },
  { id: 11, text: '我在团队活动中容易融入', dimension: 'EI', direction: 'E', reverse: false },
  { id: 12, text: '频繁的社交活动让我感到疲惫', dimension: 'EI', direction: 'I', reverse: false },
  { id: 13, text: '我在陌生的社交环境中表现活跃', dimension: 'EI', direction: 'E', reverse: false },
  { id: 14, text: '独处时我能更好地恢复精力', dimension: 'EI', direction: 'I', reverse: false },
  { id: 15, text: '我会主动寻找新的朋友', dimension: 'EI', direction: 'E', reverse: false },
  { id: 16, text: '我常常推迟参加社交活动', dimension: 'EI', direction: 'I', reverse: false },
  { id: 17, text: '我喜欢大型聚会和活动', dimension: 'EI', direction: 'E', reverse: false },
  { id: 18, text: '我更喜欢小圈子的聚会', dimension: 'EI', direction: 'I', reverse: false },
  { id: 19, text: '结识新朋友让我感到兴奋', dimension: 'EI', direction: 'E', reverse: false },
  { id: 20, text: '我更享受独自进行的爱好', dimension: 'EI', direction: 'I', reverse: false },
  { id: 21, text: '我很容易在群体中开口说话', dimension: 'EI', direction: 'E', reverse: false },
  { id: 22, text: '我更倾向于聆听而不是发言', dimension: 'EI', direction: 'I', reverse: false },
  { id: 23, text: '参与社交让我充满能量', dimension: 'EI', direction: 'E', reverse: false },
  { id: 24, text: '我倾向于在社交场合保持安静', dimension: 'EI', direction: 'I', reverse: false },
  { id: 25, text: '我更信赖事实和细节而非猜测', dimension: 'SN', direction: 'S', reverse: false },
  { id: 26, text: '我经常从整体和趋势看问题', dimension: 'SN', direction: 'N', reverse: false },
  { id: 27, text: '我喜欢按照现有的方法解决问题', dimension: 'SN', direction: 'S', reverse: false },
  { id: 28, text: '我倾向于探索新的可能性和创意', dimension: 'SN', direction: 'N', reverse: false },
  { id: 29, text: '我关注当下的实际情况', dimension: 'SN', direction: 'S', reverse: false },
  { id: 30, text: '我更多考虑未来的可能性', dimension: 'SN', direction: 'N', reverse: false },
  { id: 31, text: '我注重细节的准确性', dimension: 'SN', direction: 'S', reverse: false },
  { id: 32, text: '我喜欢用想象力推测未来', dimension: 'SN', direction: 'N', reverse: false },
  { id: 33, text: '我倾向于遵循经过验证的经验', dimension: 'SN', direction: 'S', reverse: false },
  { id: 34, text: '我喜欢用全新的方式解决问题', dimension: 'SN', direction: 'N', reverse: false },
  { id: 35, text: '我更信赖自己看到和听到的事实', dimension: 'SN', direction: 'S', reverse: false },
  { id: 36, text: '我更依赖直觉来判断事物', dimension: 'SN', direction: 'N', reverse: false },
  { id: 37, text: '我对具体的数字和数据很敏感', dimension: 'SN', direction: 'S', reverse: false },
  { id: 38, text: '我会从多个角度想象事情的发展', dimension: 'SN', direction: 'N', reverse: false },
  { id: 39, text: '我更关注任务的实际可行性', dimension: 'SN', direction: 'S', reverse: false },
  { id: 40, text: '我更关注事情背后的意义', dimension: 'SN', direction: 'N', reverse: false },
  { id: 41, text: '我倾向于用实际经验指导行动', dimension: 'SN', direction: 'S', reverse: false },
  { id: 42, text: '我会凭直觉做出初步判断', dimension: 'SN', direction: 'N', reverse: false },
  { id: 43, text: '我依赖已经验证的方法做事', dimension: 'SN', direction: 'S', reverse: false },
  { id: 44, text: '我喜欢从不同可能性中寻找答案', dimension: 'SN', direction: 'N', reverse: false },
  { id: 45, text: '我对事物的运作细节感兴趣', dimension: 'SN', direction: 'S', reverse: false },
  { id: 46, text: '我对事物的发展方向更感兴趣', dimension: 'SN', direction: 'N', reverse: false },
  { id: 47, text: '我做决策时更依赖逻辑和事实', dimension: 'TF', direction: 'T', reverse: false },
  { id: 48, text: '我做决策时更考虑他人的感受', dimension: 'TF', direction: 'F', reverse: false },
  { id: 49, text: '在冲突中我会坚持原则而不是迁就', dimension: 'TF', direction: 'T', reverse: false },
  { id: 50, text: '在冲突中我会优先维护关系', dimension: 'TF', direction: 'F', reverse: false },
  { id: 51, text: '我更重视公平而不是关怀', dimension: 'TF', direction: 'T', reverse: false },
  { id: 52, text: '我更重视关怀而不是公平', dimension: 'TF', direction: 'F', reverse: false },
  { id: 53, text: '我倾向于根据逻辑来分析问题', dimension: 'TF', direction: 'T', reverse: false },
  { id: 54, text: '我倾向于根据感受来处理问题', dimension: 'TF', direction: 'F', reverse: false },
  { id: 55, text: '我在辩论中会坚持事实证据', dimension: 'TF', direction: 'T', reverse: false },
  { id: 56, text: '我在辩论中会考虑对方感受', dimension: 'TF', direction: 'F', reverse: false },
  { id: 57, text: '我会直接指出问题所在', dimension: 'TF', direction: 'T', reverse: false },
  { id: 58, text: '我会尽量避免让人难堪', dimension: 'TF', direction: 'F', reverse: false },
  { id: 59, text: '我认为逻辑是最可靠的判断方式', dimension: 'TF', direction: 'T', reverse: false },
  { id: 60, text: '我认为同理心是重要的判断基础', dimension: 'TF', direction: 'F', reverse: false },
  { id: 61, text: '我更看重结果的正确性', dimension: 'TF', direction: 'T', reverse: false },
  { id: 62, text: '我更看重过程中的感受', dimension: 'TF', direction: 'F', reverse: false },
  { id: 63, text: '我在批评别人时直言不讳', dimension: 'TF', direction: 'T', reverse: false },
  { id: 64, text: '我在批评别人时会委婉表达', dimension: 'TF', direction: 'F', reverse: false },
  { id: 65, text: '我更相信冷静分析能解决问题', dimension: 'TF', direction: 'T', reverse: false },
  { id: 66, text: '我更相信情感理解能解决问题', dimension: 'TF', direction: 'F', reverse: false },
  { id: 67, text: '我喜欢按计划推进工作', dimension: 'JP', direction: 'J', reverse: false },
  { id: 68, text: '我喜欢随性而为，不喜欢过多限制', dimension: 'JP', direction: 'P', reverse: false },
  { id: 69, text: '我会提前做好安排以避免意外', dimension: 'JP', direction: 'J', reverse: false },
  { id: 70, text: '我享受随机应变的过程', dimension: 'JP', direction: 'P', reverse: false },
  { id: 71, text: '我会制定明确的时间表', dimension: 'JP', direction: 'J', reverse: false },
  { id: 72, text: '我会让事情自然发展', dimension: 'JP', direction: 'P', reverse: false },
  { id: 73, text: '我更喜欢事情有明确的结论', dimension: 'JP', direction: 'J', reverse: false },
  { id: 74, text: '我更喜欢事情保持开放状态', dimension: 'JP', direction: 'P', reverse: false },
  { id: 75, text: '我在工作前会制定详细计划', dimension: 'JP', direction: 'J', reverse: false },
  { id: 76, text: '我倾向于边做边调整计划', dimension: 'JP', direction: 'P', reverse: false },
  { id: 77, text: '我喜欢按步骤完成任务', dimension: 'JP', direction: 'J', reverse: false },
  { id: 78, text: '我喜欢探索不同方向的可能性', dimension: 'JP', direction: 'P', reverse: false },
  { id: 79, text: '我会设定长期目标并按部就班实现', dimension: 'JP', direction: 'J', reverse: false },
  { id: 80, text: '我喜欢灵活应对而非严格遵守计划', dimension: 'JP', direction: 'P', reverse: false },
  { id: 81, text: '我喜欢事先做决定', dimension: 'JP', direction: 'J', reverse: false },
  { id: 82, text: '我喜欢保留更多选择的空间', dimension: 'JP', direction: 'P', reverse: false },
  { id: 83, text: '我在任务完成前会避免分心', dimension: 'JP', direction: 'J', reverse: false },
  { id: 84, text: '我在执行过程中可能改变方向', dimension: 'JP', direction: 'P', reverse: false },
  { id: 85, text: '我会提前准备好所需的资源', dimension: 'JP', direction: 'J', reverse: false },
  { id: 86, text: '我喜欢随时抓住新的机会', dimension: 'JP', direction: 'P', reverse: false },
  { id: 87, text: '我倾向于控制事情的进度', dimension: 'JP', direction: 'J', reverse: false },
  { id: 88, text: '我倾向于顺其自然的发展', dimension: 'JP', direction: 'P', reverse: false },
  { id: 89, text: '我会严格遵守时间计划', dimension: 'JP', direction: 'J', reverse: false },
  { id: 90, text: '我会根据情况调整时间安排', dimension: 'JP', direction: 'P', reverse: false },
  { id: 91, text: '我习惯在开始前就明确任务步骤', dimension: 'JP', direction: 'J', reverse: false },
  { id: 92, text: '我会在过程中根据需要改变计划', dimension: 'JP', direction: 'P', reverse: false },
  { id: 93, text: '我喜欢一切在掌控之中', dimension: 'JP', direction: 'J', reverse: false }
];

// 计算MBTI类型
function calculateMBTI(answers) {
  // 初始化各维度得分
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  };
  
  // 遍历所有答案计算得分
  answers.forEach((answer, index) => {
    const question = mbtiQuestions[index];
    if (!question) return;
    
    // 处理反向题
    const score = question.reverse ? (8 - answer) : answer;
    
    // 累加到对应维度
    if (question.direction === 'E') {
      scores.E += score;
    } else if (question.direction === 'I') {
      scores.I += score;
    } else if (question.direction === 'S') {
      scores.S += score;
    } else if (question.direction === 'N') {
      scores.N += score;
    } else if (question.direction === 'T') {
      scores.T += score;
    } else if (question.direction === 'F') {
      scores.F += score;
    } else if (question.direction === 'J') {
      scores.J += score;
    } else if (question.direction === 'P') {
      scores.P += score;
    }
  });
  
  // 计算最终类型
  let type = '';
  type += (scores.E - scores.I) > 0 ? 'E' : 'I';
  type += (scores.S - scores.N) > 0 ? 'S' : 'N';
  type += (scores.T - scores.F) > 0 ? 'T' : 'F';
  type += (scores.J - scores.P) > 0 ? 'J' : 'P';
  
  // 计算百分比倾向
  // 正确计算每个维度的占比
  const totalEI = scores.E + scores.I;
  const totalSN = scores.S + scores.N;
  const totalTF = scores.T + scores.F;
  const totalJP = scores.J + scores.P;
  
  const eiPercent = totalEI > 0 ? Math.round((scores.E / totalEI) * 100) : 50;
  const snPercent = totalSN > 0 ? Math.round((scores.S / totalSN) * 100) : 50;
  const tfPercent = totalTF > 0 ? Math.round((scores.T / totalTF) * 100) : 50;
  const jpPercent = totalJP > 0 ? Math.round((scores.J / totalJP) * 100) : 50;
  
  return {
    type,
    scores,
    percentages: {
      EI: eiPercent,
      SN: snPercent,
      TF: tfPercent,
      JP: jpPercent
    },
    description: mbtiTypes[type] || null
  };
}

export { calculateMBTI, mbtiQuestions, mbtiTypes };