import { ReversePipe } from "app/shared/reverse.pipe";

describe('Pipe: reverse pipe', () => {

  it('should check pipe correctly working', () => {
    let reversePipe = new ReversePipe();
    
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
