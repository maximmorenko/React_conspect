# React_conspect
Установка:
https://reactjs.org/docs/create-a-new-react-app.html

Расширение React Developer Tools !!!!!!!!!!!!!!!
После установки перегрузить хром

npx create-react-app my-app
cd my-app
npm start

git add .
git commit -m "методы жизненного цикла"
git push origin master

1. Чистим две основные папки public(монтируемый код в div id="root") и src(исходный код)
2. {/*привет коментарий в JSX*/}

https://www.youtube.com/watch?v=i2Yf7JZonB4 - модальное окно



rcc→	скелет компонента класса
rrc→	Скелет компонента класса с соединением react-redux
rrdc→	скелет компонента класса с соединением и отправкой реакции-редукции
rccp→	скелет компонента класса с типами реквизита после класса
rcjc→	скелет компонента класса без строк импорта и экспорта по умолчанию
rcfc→	скелет компонента класса, содержащий все методы жизненного цикла
rwwd→	компонент класса без операторов импорта
rpc→	скелет чистого компонента класса с типами реквизита после класса
rsc→	скелет компонента без сохранения состояния
rscp→	Компонент без гражданства со скелетом типов prop
rscm→	запомнить скелет компонента без сохранения состояния
rscpm→	memoize компонент без сохранения состояния со скелетом типов опор

rsf→	скелет именованной функции без сохранения состояния

rsfp→	Именованная функция без сохранения состояния со скелетом типов prop
rsi→	компонент без состояния с типами свойств и неявным возвратом
fcc→	компонент класса со скелетом типов потока
fsf→	Скелет именованной функции без сохранения состояния со скелетом типов потока
fsc→	компонент без состояния со скелетом типов потока
rpt→	пустое объявление propTypes
rdp→	пустое объявление defaultProps
con→	конструктор класса по умолчанию с реквизитом
conc→	конструктор класса по умолчанию с реквизитами и контекстом
est→	пустой объект состояния
cwm→	componentWillMount method
cdm→	componentDidMount method
cwr→	componentWillReceiveProps method
scu→	shouldComponentUpdate method
cwup→	componentWillUpdate method
cdup→	componentDidUpdate method
cwun→	componentWillUnmount method
gsbu→	getSnapshotBeforeUpdate method
gdsfp→	static getDerivedStateFromProps method
cdc→	componentDidCatch method
ren→	render method
sst→	this.setState with object as parameter
ssf→	this.setState with function as parameter
props→	this.props
state→	this.state
bnd→	binds the this of method inside the constructor
disp→	MapDispatchToProps redux function

В следующей таблице перечислены все фрагменты, которые можно использовать для типов реквизита. Каждый фрагмент, касающийся типов реквизита, начинается с pt, поэтому его легко сгруппировать и изучить все доступные варианты. Кроме того, у каждого фрагмента типа свойства есть один эквивалент, когда нам нужно объявить, что это свойство также требуется.

Например pta, создает PropTypes.arrayи ptarсоздаетPropTypes.array.isRequired

Триггер	Содержание
pta→	PropTypes.array,
ptar→	PropTypes.array.isRequired,
ptb→	PropTypes.bool,
ptbr→	PropTypes.bool.isRequired,
ptf→	PropTypes.func,
ptfr→	PropTypes.func.isRequired,
ptn→	PropTypes.number,
ptnr→	PropTypes.number.isRequired,
pto→	PropTypes.object,
ptor→	PropTypes.object.isRequired,
pts→	PropTypes.string,
ptsr→	PropTypes.string.isRequired,
ptsm→	PropTypes.symbol,
ptsmr→	PropTypes.symbol.isRequired,
ptan→	PropTypes.any,
ptanr→	PropTypes.any.isRequired,
ptnd→	PropTypes.node,
ptndr→	PropTypes.node.isRequired,
ptel→	PropTypes.element,
ptelr→	PropTypes.element.isRequired,
pti→	PropTypes.instanceOf(ClassName),
ptir→	PropTypes.instanceOf(ClassName).isRequired,
pte→	PropTypes.oneOf(['News', 'Photos']),
pter→	PropTypes.oneOf(['News', 'Photos']).isRequired,
ptet→	PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
ptetr→	PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
ptao→	PropTypes.arrayOf(PropTypes.number),
ptaor→	PropTypes.arrayOf(PropTypes.number).isRequired,
ptoo→	PropTypes.objectOf(PropTypes.number),
ptoor→	PropTypes.objectOf(PropTypes.number).isRequired,
ptoos→	PropTypes.objectOf(PropTypes.shape()),
ptoosr→	PropTypes.objectOf(PropTypes.shape()).isRequired,
ptsh→	PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),
ptshr→	PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired,
