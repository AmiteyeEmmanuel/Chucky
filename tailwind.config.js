/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Inter'],
			custom: [ 'Crete Round']
  		},
  		colors: {
  			white: '#fff',
  			'off-white': '#f3f4f6',
  			black: '#000',
  			'off-black': '#081735',
  			purple: '#6C5DD3',
  			'dark-blue': '#5AB2FF',
  			red: '#FF854C',
  			'grey-white': '#F4F6FF',
  			grey: '#8F95B2',
  			'light-green': 'linear-gradient(283.95deg, #33C600 -12.57%, #CDF4FF 126.88%)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'custom-gradient1': 'linear-gradient(283.95deg, #0049C6 -12.57%, #CDF4FF 126.88%)',
  			'custom-gradient2': 'linear-gradient(135deg, #FFB7F5 0%, #6C5DD3 100%)',
  			'custom-gradient3': 'linear-gradient(333.01deg, #FF754C -23.54%, #FFB7F5 173.81%)',
            'custom-gradient4': 'linear-gradient(333.01deg, #667EFE -23.54%, #FFB7F5 173.81%)',
            'custom-gradient5': 'linear-gradient(283.95deg, #A3CB31 -12.57%, #CDF4FF 126.88%)'

  		},
  		boxShadow: {
  			bottom: '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
			custom1: '0px 4px 6px -2px rgba(30, 41, 59, 0.1)', 
            custom2: '0px 12px 16px -4px rgba(30, 41, 59, 0.04)', 
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  backdropBlur: {
			'custom': '27.182817459106445px',
		  }
  	}
  },
    plugins: [require("tailwindcss-animate")]
}
