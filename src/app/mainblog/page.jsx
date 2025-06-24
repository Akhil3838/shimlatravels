import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

function BlogList() {
  // Sample blog data
  const blogs = [
    { id: 1, title: "Chopta-Tungnath: A Birthday Tale of Mountains & Magic", date: "May 24, 2023", author: "Traveler",url:"blog" },
    { id: 2, title: "The Road Less Travelled: Exploring Kumaon on a Budget", date: "day", author: "Alston", url:"blogalston" },
    { id: 3, title: "The Trip That Changed Everything – From Strangers to Stories", date: "day", author: "Jagriti",url:"blogJagriti" },
    { id: 4, title: "Darjeeling-Sikkim: A Tale of Lost Worries & Found Wonder", date: "March 25,2025", author: "Iti",url:"bloglti" },
    { id: 5, title: "A Peaceful Yet Adventurous Escape to Bir Billing & Rajgunda", date: "day", author: "Manik",url:"blogmanik" },
  ];

  // Format date - returns null if date is invalid or just "day"
  const renderDate = (dateString) => {
    if (!dateString || dateString.toLowerCase() === 'day') {
      return null;
    }
    // If date is already formatted (like "March 25"), just return it
    if (isNaN(new Date(dateString).getTime())) {
      return dateString;
    }
    // Otherwise format properly
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Header />
      <div className="blog-container" style={{ paddingTop: '130px' }}>
        <header className="blog-header">
          <h1>Travel Chronicles</h1>
          <p>Journeys that became stories</p>
        </header>
        
        <div className="blog-list">
          {blogs.map(blog => (
           <Link href={`/${blog.url}`} key={blog.id}>
                <div key={blog.id} className="blog-card">
                  <div className="blog-card-inner">
                    <h2 className="blog-title">{blog.title}</h2>
                    <div className="blog-meta">
                      {renderDate(blog.date) && (
                        <span className="blog-date">{renderDate(blog.date)}</span>
                      )}
                      <span className="blog-author">by {blog.author.trim()}</span>
                    </div>
                  </div>
                </div>
           </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogList;