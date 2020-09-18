// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [{
  title: 'Javascript',
  competency: 3,
  category: ['Web Development', 'Languages', 'Javascript'],
},

{
  title: 'React',
  competency: 1,
  category: ['Web Development', 'Javascript'],
},
{
  title: 'Bash',
  competency: 1,
  category: ['Tools', 'Languages'],
},

{
  title: 'HTML',
  competency: 4,
  category: ['Web Development'],
},
{
  title: 'MySQL',
  competency: 2,
  category: ['Web Development', 'Databases', 'Languages'],
},
{
  title: 'Matplotlib',
  competency: 2,
  category: ['Data Science', 'Python'],
},
{
  title: 'R',
  competency: 1,
  category: ['Data Science'],
},

{
  title: 'Git',
  competency: 2,
  category: ['Tools'],
},

{
  title: 'Visual Studio',
  competency: 3,
  category: ['Tools', 'Web Development'],
},
{
  title: 'Numpy',
  competency: 2,
  category: ['Data Science', 'Python'],
},

{
  title: 'Tensorflow + Keras',
  competency: 1,
  category: ['Data Science', 'Python'],
},
{
  title: 'Jupyter',
  competency: 3,
  category: ['Data Science', 'Python'],
},

{
  title: 'HTML + CSS',
  competency: 3,
  category: ['Web Development', 'Languages'],
},
{
  title: 'Python',
  competency: 5,
  category: ['Languages', 'Python'],
},
{
  title: 'C',
  competency: 1,
  category: ['Languages'],
},
{
  title: 'Java',
  competency: 1,
  category: ['Languages'],
},
{
  title: 'MATLAB',
  competency: 1,
  category: ['Languages'],
},



].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
