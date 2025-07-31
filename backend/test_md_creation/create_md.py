from bs4 import BeautifulSoup
import pprint
import re

pp = pprint.PrettyPrinter(indent=4)

def main():
    """This code takes in an HTML file from Linkedin posts and parses all the posts for the 
    relevant text the user posted to create an markdown file that can be added to a vector DB
    for use in RAG in an LLM.
    
    Not an ideal solution because it LinkedIn uodates their UI the html code may change and this
    parser would have to be rewritten.
    """

    # Load the local HTML file
    with open("./full_post.html", "r", encoding="utf-8") as f:
        html_content = f.read()

    # Parse the HTML
    soup = BeautifulSoup(html_content, "html.parser")

    # Get all the post divs
    post_filter = "feed-shared-update-v2__control-menu-container display-flex flex-column flex-grow-1 full-height"
    post_divs = soup.find_all("div", class_=post_filter)

    print(len(post_divs))
    
    for div in post_divs:
        # TODO Create Vector DB for reposts as well to see the users other interests
        if "reposted this" in div.get_text():
            print("Repost")
            continue

        # TODO find the date the post was created aswell
        post_number_string = div.find_all("h2", class_="visually-hidden")[0].text.strip()
        
        post_text_filter = "update-components-text relative update-components-update-v2__commentary"
        try:
            post_text_divs = div.find_all("div", class_=post_text_filter)[0]
        except:
            continue
        
        post_text_spans = post_text_divs.find_all("span", dir="ltr")[0]
        
        clean_post_text = post_text_spans.get_text(separator="\n", strip=True)
        
        with open("full_output.md", "a", encoding="utf-8") as f:
            f.write(F"# {post_number_string}\n")
            f.write(clean_post_text + "\n\n")



if __name__ == '__main__':
    main()