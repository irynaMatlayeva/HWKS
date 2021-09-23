import './index.scss'

const QuadraticEquationComponent = () => {
  const getDiscr = (a, b, c) => (b * b) - 4 * a * c;

  const rootsOfQuadraticEquation = (a, b, c, descr) => {
    return {
      x1: (-b + Math.sqrt(descr)) / (2 * a),
      x2: (-b - Math.sqrt(descr)) / (2 * a)
    }
  }

  const returnTheResultWithCorrectData = (a, b, c) => {
    const d = [a, b, c].every(x => Number.isFinite(x)) && getDiscr(a, b, c)
    if (d >= 0 && Number.isFinite(d)) return rootsOfQuadraticEquation(a, b, c, d)
  }

  // garbage => garbage
  const garbageGarbageOrResult = (a, b, c) => {
    let d = getDiscr(a, b, c);
    return rootsOfQuadraticEquation(a, b, c, d)
  }

  // garbage => nothing
  const garbageNothingOrResult = () => {
    returnTheResultWithCorrectData()
    return {x1: null, x2: null}
  }

  // garbage => error
  const garbageErrorOrResult = () => {
    returnTheResultWithCorrectData()
    throw new Error('d should be in [0, +Infinity]')
  }

  console.log('garbageGarbageOrResult', garbageGarbageOrResult(12, '12', 12))
  console.log('garbageNothingOrResult', garbageNothingOrResult(12))
  console.log('garbageErrorOrResult', garbageErrorOrResult(-12, 36, 8))

  return (
    <>
      <p className='result'>Garbage => garbage or result: <span className='result__text'>{ garbageGarbageOrResult(12, '12', 12) }</span></p>
      <p className='result'>Garbage => nothing or result: <span className='result__text'>{ garbageNothingOrResult(12) }</span></p>
      <p className='result'>Garbage => error or result: <span className='result__text'>{ garbageErrorOrResult(-12, 36, 8) }</span></p>

    </>
  );
};

export default QuadraticEquationComponent;
