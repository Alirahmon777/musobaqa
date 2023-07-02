export function darkClass(mode, i) {
  return `${
    mode
      ? `${i % 2 !== 0 ? '' : '!bg-[#F2EAE1]'}`
      : `!bg-[#414345] border-b-gray-500 text-white ${
          i % 2 === 0 ? '!bg-[#414345]' : '!bg-[#6B7280]'
        }`
  }`;
}

export function darkClassHead(mode, bg) {
  return `${mode ? '' : `!bg-${bg} border-b-gray-500 !text-[#ACACAC]`}`;
}
