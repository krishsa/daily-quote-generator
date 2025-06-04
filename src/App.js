import './App.css'

// Collection of beautiful landscape backgrounds
const backgrounds = [
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80', // Foggy Forest
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80', // Sunset Coast
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80', // Yosemite Valley
  'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&q=80', // Mountain Lake
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80', // Mountain Peak
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80', // Waterfall
]

function App() {
  const [quote, setQuote] = React.useState({ text: '', author: '' })
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  const getRandomBackground = () => {
    const newBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    document.body.style.backgroundImage = `url(${newBg})`
  }

  const fetchQuote = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://dummyjson.com/quotes/random')
      if (!response.ok) {
        throw new Error('Failed to fetch quote')
      }
      const data = await response.json()
      setQuote({
        text: data.quote,
        author: data.author
      })
      getRandomBackground()
    } catch (error) {
      console.error('Error fetching quote:', error)
      setError('Failed to load quote. Please try again.')
    }
    setIsLoading(false)
  }

  React.useEffect(() => {
    fetchQuote()
  }, [])

  return React.createElement('div', { className: 'quote-container' },
    React.createElement('div', { className: 'quote-box' },
      isLoading ? React.createElement('div', { className: 'loading' }, 'Loading...') :
      error ? React.createElement('div', { className: 'error' }, error) :
      [
        React.createElement('div', { className: 'quote-text', key: 'text' }, `"${quote.text}"`),
        React.createElement('div', { className: 'quote-author', key: 'author' }, `- ${quote.author}`),
        React.createElement('button', {
          className: 'new-quote-btn',
          onClick: fetchQuote,
          disabled: isLoading,
          key: 'button'
        }, isLoading ? 'Loading...' : 'New Quote')
      ]
    )
  )
}

export default App
