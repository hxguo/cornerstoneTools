import faker from 'faker';

faker.locale = 'zh_CN';
export default {
  computedDiffuseDensity(x, maxDensity) {
    const a = Number(-0.000000000012092),
      b = Number(0.000000088493),
      c = Number(-0.0013292),
      d = Number(4.7786);
    const m = Number(-0.00097399),
      n = Number(3.9699);
    let density47 = Number(a * x * x * x + b * x * x + c * x + d);
    let density40 = Number(m * x + n);

    density47 = density47 < 0 ? 0 : density47;
    density47 = density47 > 4.7 ? 4.7 : density47;
    density40 = density40 < 0 ? 0 : density40;
    density40 = density40 > 4.0 ? 4.0 : density40;

    return maxDensity === 4.7 ? density47.toFixed(2) : density40.toFixed(2);
  },
  getUUID() {
    return faker.random.uuid();
  },
};
