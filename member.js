function skillsMember() {
  return {
    skills: ['React', 'JavaScript', 'Node'],
    addSkill: function (skill) {
      this.skills.push(skill);
    },
  };
}