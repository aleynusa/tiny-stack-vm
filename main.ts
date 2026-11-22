T='0Dt=52639>>>>>>>1>>>1>>>9>>>9P]]P091:9==4='.split(9)
for(d of (F=require('fs')).readdirSync(P='/input/')){for(p=(r=n=>F.readFileSync(P+d+n+'.bin'))`/program`,u=r`/input`,o='',D=new Int32Array(257),C=[],c=j=t=k=0,s=1e6;!t;)v=T[(x=p[c])>>4]?.charCodeAt(x&15),b=D[k],a=D[k-1],
t=s--?(c+=m=v-48>>4)in p?v?k<v%4?2:(k+=v<<28>>30)>256?3:(c++,i=m&&p.readIntLE(c-m,m),
x<35?1/(D[k]=[,i,i,a,b,a,a,D[k-2],,,,,,,,,a+b,a-b,Math.imul(a,b),a/b,a%b,(A=a>>>0)/(B=b>>>0),A%B,-b,a&b,a|b,a^b,~b,a<<b,a>>b,a>>>b,,a==b,a<b,A<B][x])?x>4&x<8&&(D[k-1]=b,D[k-2*(x>6)]=a,0):[x&&4]:
x<53?isNaN(c=x<51?c+(x<49|!b==x%2)*i:x&1?C.push(c)>64?F:i&65535:C.pop())&&x-44:
x<66?b>>8?6:(x&1?C[~b]=a:D[k]=C[~b],0):
x<82?(y=o+(x&1?String.fromCharCode(b):b))[65536]?11:!(o=y):
x&1?[b&255]:(D[k]=u[j++]??-1,0)):5:9:10
F.mkdirSync(h='/output/'+d);(W=F.writeFileSync)(h+'/stdout.bin',o,'ascii')
W(h+'/exit.txt',t+'')}
