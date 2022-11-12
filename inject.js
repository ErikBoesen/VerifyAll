const CHECK_PATTERN = 'svg path[d^="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"]';
const CHECK_SVG = `<svg viewBox="0 0 24 24" aria-label="Verified account" role="img" class="r-13v1u17 r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.76z" style="fill: "#1D9BF0";"></path></g></svg>`;



const headerNode =
  "span.css-901oao.css-16my406.r-xoduu5.r-18u37iz.r-1q142lx.r-poiln3.r-bcqeeo.r-qvutc0";
const tweets =
  "div.css-901oao.r-xoduu5.r-18u37iz.r-1q142lx.r-37j5jr.r-16dba41.r-bcqeeo.r-qvutc0";
const profileNode =
  "span.css-901oao.css-16my406.r-xoduu5.r-18u37iz.r-1q142lx.r-poiln3.r-adyw6z.r-135wba7.r-bcqeeo.r-qvutc0";

const search = `form > * > * > * > * > * > * > * > * > * > * > * > * > ${tweets}`;
const chat = `#layers > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > * > ${tweets}`;
const youMightLike = `div > aside > div:nth-child(2) > * > * >* > * > * > * > * > a > div > ${tweets}`;
const spaces = `div.css-1dbjc4n.r-1awozwy.r-ar5de.r-1777fci.r-117bsoe.r-4ukpa0.r-1pn2ns4 ${headerNode}`;

const selectors = [search, chat, youMightLike, spaces, headerNode, tweets, profileNode];

async function main() {
    const observer = new MutationObserver(function (mutations, observer) {
        
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(node => {
              if(node.nodeType === node.ELEMENT_NODE){
                // node.parentElement.innerHTML = BLUE_CHECK
                for (const selector of selectors) {
                    const elements = node.querySelectorAll(selector);
                    if (elements.length > 0){
                        for(elem of elements){
                            // console.log(elem)
                            elem.innerHTML = CHECK_SVG
                        }
                    }
                }
              }  
            });
        })
    });
  
    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
  
  main();
